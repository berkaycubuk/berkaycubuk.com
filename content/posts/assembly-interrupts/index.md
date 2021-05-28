---
title: Assembly Interrupts
slug: assembly-interrupts
date: 2020-11-14T05:00:00.000Z
date_updated: 2021-02-11T19:06:15.000Z
---

Interrupts are simply set of procedures. We're using interrupts with `INT` command. Before running an interrupt we have to store some data on stack to tell interrupt what we want to do.
```asm
  MOV AH, 09H   ;function number for outputing string to the monitor
  LEA DX, STR   ;store the string that we want to display
  INT 21H       ;run interrupt
```

This is an axample interrupt to display string.

## Useful Interrupts

### INT 10H - Display

This interrupt is looking to AH register. Let's look at it's functions:

#### 06 - clear the screen

- **AH = 06**   ;function number
- **AL = 00**   ;page number
- **BH = 07**   ;default style (black background with white text)
- **CH = 00**   ;row number (start)
- **CL = 00**   ;column number (start)
- **DH = 00**   ;row number (end)
- **DL = 00**   ;column number (end)

#### 02 - setting the cursor

- **AH = 02**   ;function number
- **DH = 00**   ;row number for cursor
- **DL = 00**   ;column number for cursor
- **BH = 00**   ;page number

#### 03 - get the current cursor position

- **AH = 03**   ;function number
- **BH = 00**   ;page number
- **DH = 00**   ;row number
- **DL = 00**   ;column number

#### 0E - output a character to the screen

- **AH = 0E**   ;function number
- **AL = 00**   ;character we want to display
- **BH = 00**   ;page number
- **BL = 00**   ;foreground color

---

### INT 21H - Display & Keyboard

#### 09 - outputing a string of data to the monitor

- **AH = 09**   ;function number
- **DX = 00**   ;offset address for string array

It's important to have **$** in the end of the array.

#### 02 - outputing a single character to the monitor

- **AH = 02**   ;function number
- **DL = 00**   ;ASCII code for character

#### 01 - inputing a single character with an echo

- **AH = 01**   ;function number
- **AL = 00**   ;it's stores the data displayed and taken by keyboard after interrupt (ASCII).

#### 0A - inputing a string of data from the keyboard

- **AH = 0A**   ;function number
- **DX = 00**   ;offset address for string array we want to store

When we press **ENTER** it stops recording data, after:

- **DS:DX =** buffer size with bytes (character length + 2)
- **DS:DX+1 =** character length
- **DS:DX+2 =** first character of array
- **DS:DX+n =** last character of array

To be able to record array we have to declare buffer storage.

- **BUFFER DB 10,?,10 DUP (FF)**

---

### INT 16H - Keyboard

#### 01 - controlling to detect key strokes

- **AH = 01**   ;function number

If we type something **ZF** becomes **0**.

#### 00 - reading keyboard

- **AH = 00**   ;function number

When we type something to keyboard **AL** stores typed character with ASCII format.

---

These interrupts are just examples, there are ton of interrupts we can use.

## Example Code

I want to show you how to use interrupts with a simple example. In this example I want to type some string and display it.
```asm
.MODEL SMALL

.STACK 64

.DATA
  MESSAGE DB 'Type your string:', '$'  ;welcome message
  USER_INPUT DB 80 DUP('$')            ;user input we want to store
  NEWLINE DB 10,13,'$'                 ;move to new line after typing

.CODE
  MOV AX, @DATA                         ;required stuff
  MOV DS, AX

  LEA SI, USER_INPUT

  MOV AH, 09H
  LEA DX, MESSAGE                      ;display welcome message
  INT 21H

  MOV AH, 0AH                          ;get pressed key
  MOV DX, SI
  INT 21H

  MOV AH, 09H                          ;display new line
  LEA DX, NEWLINE
  INT 21H

  MOV AH, 09H                          ;display typed string
  LEA DX, USER_INPUT+2
  INT 21H

  MOV AH, 4CH                          ;terminate program
  INT 21H

END                                    ;exit
```
