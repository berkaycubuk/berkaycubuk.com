---
title: Introduction to the Assembly Language
slug: assembly-introduction
date: 2020-11-13T05:00:00.000Z
date_updated: 2021-02-11T19:05:46.000Z
---

## What is Assembly language?

Assembly Language is **low-level** programming language which is used to program computers. It's depends on the machine code instructions, so

every assembly language is designed for exactly one specific computer architecture.

Assembly code is converted to **executable machine code** with an **assembler**. Computers will execute these machine codes to run our programs.

#### Some advantages of assembly language:

- Requires less memory and execution time
- Allows us to work with hardware specific jobs

## Simple example to print "Hello World" in assembly
```asm
.MODEL SMALL                          ;select your model (your project estimated size)

.STACK 64                             ;reserve 64 bytes of uninitialized storage

.DATA                                 ;data segment
  MESSAGE DB "Hello World", "$"       ;message variable with string we want to print out

.CODE                                 ;code segment
  MOV AX, @DATA                       ;required code block for small model
  MOV DS, AX

  MOV AH, 09H                         ;09H for interrupt to display string
  LEA DX, MESSAGE                     ;display the message
  INT 21H                             ;interrupt 21H

  MOV AX, 4C00H                       ;terminate with return code (same as 4CH)
  INT 21H                             ;interrupt 21H
END                                   ;exit
```

Now we have to setup some sort of code enviorement to run this code. I'd like to go with DOSBox. Visit [dosbox.com](https://www.dosbox.com/download.php?main=1) to download latest version. And then we need to install assembler, for this I prefer Turbo Assembler (TASM).

For more detailed enviorement setup guide you can visit [this blog post](https://mccshreyas.wordpress.com/2017/03/27/how-to-install-and-configure-tasm-on-windows-7810/).

To run the program open your DOSBox and type `edit example.asm`. With this command emulator will open it's code editor. In here you can write your code. When you feel ready you can go top left and click to save and then click exit.

![dosbox-screenshot-1](dosbox-screenshot-1.png)

![dosbox-screenshot-2](dosbox-screenshot-2.png)

After all we have to convert our code into machine code, in enviorement setup we installed TASM to do that.

In terminal type `tasm example.asm`. With this command your asm file will be converted into obj file.

![dosbox-screenshot-3](dosbox-screenshot-3.png)

After we can run `tlink example.obj` to make it executable.

![dosbox-screenshot-4](dosbox-screenshot-4.png)

Now if you run `dir` command you should see your **example.exe** file.

![dosbox-screenshot-5](dosbox-screenshot-5.png)

To run that just type `example` and there we go, we have our *"Hello World"* printed.

![dosbox-screenshot-6](dosbox-screenshot-6.png)

#### References

- [Wikipedia](https://en.wikipedia.org/wiki/Assembly_language)
- [Tutorials Point](https://www.tutorialspoint.com/assembly_programming/assembly_introduction.htm)
- [C-Jump](http://www.c-jump.com/CIS77/ASM/Stack/lecture.html)
- [Stackoverflow](https://stackoverflow.com/questions/5364270/concept-of-mov-ax-cs-and-mov-ds-ax)
- [MCCshreyas](https://mccshreyas.wordpress.com/2017/03/27/how-to-install-and-configure-tasm-on-windows-7810/)
