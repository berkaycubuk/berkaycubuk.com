---
title: Serving Multiple Sites in One Object Storage with Nginx
date: 2024-08-03T00:00:00.000Z
---

In [Static Ninja](https://staticninja.com), I'm working on a system that will allow people to upload their static sites and host them with a unique subdomain. The most secure and efficient way I found is using object storage to store the site contents and reverse proxying them with Nginx. This may not be the best way to do it, but perfect for my budget and scale.

When I tried to develop a proof of concept, the first thing I encountered is the object storage does not work the way I wanted. It does not work like a normal filesystem that we can easily re route the user to index.html when a certain folder visited. I need to use Nginx, because I'll be serving all the sites under the same domain with different subdomains. So, using a reverse proxy, technically I can do it. But making it real took lots of my time, and currently I'm happy to report that I made it :^)

Here is the Nginx configuration I'm using for each subdomain:

```
server {
    server_name subdomain.domain.tld;

    listen 80;

    error_page 404 = @fallback-2;

    location / {
        rewrite /[^/]*\.\w+$  "/sitefolder${uri}?" break;
	    rewrite /\w+$      "/sitefolder${uri}/index.html?" break;
	    rewrite /$         "/sitefolder${uri}index.html?" break;
	    rewrite ^          "/sitefolder${uri}?" break;

        proxy_pass https://bucketaddress;
	    proxy_intercept_errors on;
	    index index.html;
        proxy_set_header Host bucketaddress;
	    proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location @fallback-2 {
	    error_page 404 /404;

	    rewrite ^/sitefolder/(.*)/index.html$  "/sitefolder/$1.html" break;
	    proxy_intercept_errors on;
	    proxy_pass https://bucketaddress;
    }

    location = /404 {
        proxy_pass https://bucketaddress/404.html;
        proxy_set_header Host bucketaddress;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

For context, I store all the sites in separate folders, in the example config's site the folder I'm using is `sitefolder`.

I'm using Linode's object storage and I think this configuration should work with all other object storages. They claim it's S3 compatible, so you probably will make it work.

---

### References:
- https://atevans.com/2012/12/12/nginx-config-try_files-for-s3.html
