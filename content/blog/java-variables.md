---
title: Java Variables
slug: java-variables
date: 2020-11-19T05:00:00.000Z
date_updated: 2021-02-11T19:08:29.000Z
---

Variables are important pieces in programming. We are using them to store data values. In java, we have different types of variables:

- `int`
- `float`
- `char`
- `boolean`
- `byte`
- `short`
- `long`
- `double`
- `String` (I don't know why it's capital 😥)

## How to create or declare variables

First specify the type and give it a name and then assign it a value.
```java
variable_type variable_name = value;
```

For example:
```java
String userName = "Berkay";
int likeCount = 5;
```

Also, you can declare a variable without value.
```java
char c;
c = 'b';
```

If you assign it new value, it will update itself.
```java
String country = "Turkey";

System.out.println(country); // Turkey

country = "England";

System.out.println(country); // England
```

Let's learn the types with examples.

## Numbers
```java
int number1 = 10;
double number2 = 4.5;
// you have to cast float
float number3 = (float) 4.5;
number3 = 4.5f; // this is shorter way
```

## Characters and Strings
```java
char character = 'c';
String string = "string";
```

## Boolean

Boolean type only accepts `true` or `false`.
```java
boolean bool = false;
bool = true;
```

## Extra 😉

You can merge strings with `+`. Let's see it in action.
```java
public class MyClass {

  public static void main(String args[]) {

    String fileName = "index";
    String fileExt = "html";

    System.out.println("Your file => " + fileName + "." + fileExt);

  }

}
```

Output:
```shell
> Your file => index.html
```
