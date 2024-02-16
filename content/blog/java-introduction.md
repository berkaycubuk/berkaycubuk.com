---
title: Introduction to Java
slug: java-introduction
date: 2020-11-17T05:00:00.000Z
date_updated: 2021-02-11T19:07:33.000Z
---

## What is Java?

Java is not only programming language, Java is a platform with multiple sub items:

- Programming language
- Infrastructure for Java apps
- Libraries and tools for different areas like desktop, mobile, watch, web...

Java have 3 different connected platforms:

**Java Standart Edition (JSE)**: Core for basic Java apps.

**Java Enterprise Edition (JEE)**: For big, distributed commercial Java apps.

**Java Micro Edition (JME)**: For small devices like mobile, watch...

To use these platforms, first you have to learn JSE, because other platforms are based on JSE.

## Java is platform independent

Java is platform independent so you can develop your java application in your current device and use it in any other device.

> Java has "Write once, run anywhere" philosophy.

For example I can create calculator application on my windows machine and then I can use it on my linux machine. That's super cool 🤯

But how it's possible? It's simple because java uses **Java Virtual Machine (JVM)**. First we writing our java application and compiling it with java compiler. After compiling it's produce **class** files with **.class** extension. Class files are contain platform independent byte-code binary data that can be interpreted by any **JVM**. But that means we have JVM's that designed for each platform. This JVM thing lowers our speed but that's the price for independence (Talking about miliseconds 😛).

Also we have **JDK** and **JRE**.

**JDK** (Java Development Kit) is what we're using to develop java applications. **JRE** (Java Runtime Enviorement) is what we need to run java applications.

## Let's start programming

Before start programming you have to setup your enviorement. It's different for each operating system so you can take quick look on the web.

Start with something well known:
```java
public class FirstApp { // also your filename => FirstApp.java

  public static void main(String[] args) {  // standart structure for main function
    // do what you want

    System.out.println("Hello World!");  // print string to the console

  }

}
```

Output will be like:
```shell
> Hello World!
```

OK, looks cool but how did I compile and run that 🤔 If you want to learn the core concept, open your terminal and run `javac FirstApp.java`. This command will create **FirstApp.class** file. To run the program just type `java FirstApp`. That's how we compile and run java application, but in reality that's not efficent. To make it better we use IDE's. There are good alternatives such as [Eclipse](https://www.eclipse.org/downloads/), [Intellij IDEA](https://www.jetbrains.com/idea/), [Netbeans](https://netbeans.org/)...

If you want to learn more about java I'm leaving some links:

- [Javatpoint](https://www.javatpoint.com/java-tutorial)
- [Tutorials Point](https://www.tutorialspoint.com/java/index.htm)
- [W3 Schools](https://www.w3schools.com/java/)
- [Programiz](https://www.programiz.com/java-programming/hello-world)
