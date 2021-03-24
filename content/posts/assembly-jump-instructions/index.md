---
title: Assembly Jump Instructions
slug: assembly-jump-instructions
date: 2020-11-15T05:00:00.000Z
date_updated: 2021-02-11T19:06:41.000Z
---

With jump instructions we can control the program flow. There are different types of jumps:

### Unconditional jumps

With `JMP` command we can move to another point in the program.

    JMP label   ;syntax of JMP instruction
    

In order to run jump instruction we should have a label. Labels are simple checkpoints to describe it to computer. We can simply declare label with adding **":"** to the end. Like other languages we cannot start with a number. Here are examples for labels:

    label1: MOV AX, 1
    label2: MOV AX, 2
    

Now we can try what we learned on example:

    .MODEL SMALL
    
    .STACK 64
    
    .CODE
      MOV AX, 5               ;set AX to 5
      MOV BX, 2               ;set BX to 2
    
      JMP label1              ;go to label1
    
      label2: JMP label3      ;go to label3
    
      label1:
      ADD AX, BX              ;add BX to AX and store it in AX
      JMP label2              ;go to label2
    
      label3:
      MOV AX, 4C00H           ;terminate
      INT 21H
    
    END                       ;exit
    

### Short Conditional Jumps

With `JMP` instruction we can do unconditional jump but sometimes we only want to jump when some conditions are in act. To make it happen we have 3 different groups of other instructions.

#### Jump instructions that test single flag
InstructionDescriptionConditionJZ, JEJump if zero (equal)ZF = 1JC, JB, JNAEJump if carry (below, not above equal)CF = 1JSJump if signSF =1JOJump if overflowOF = 1JPE, JPJump if parity evenPF = 1
All instructions have their opposites. Like `JZ` (Jump if zero) with `JNZ` (Jump if not zero). Also some instructions do the same thing like `JZ` (Jump if zero) and `JE` (Jump if equal).

#### Jump instructions for signed numbers
InstructionDescriptionConditionJE, JZJump if equal (zero)ZF = 1JG, JNLEJump if greater (not less or equal)ZF = 0 and SF = OFJL, JNGEJump if less (not greater or equal)SF <> OFJGE, JNLJump if greater or eqaul (not less)SF = OFJLE, JNGJump if less or equal (not greater)ZF = 1 or SF <> OF
*<> is means not equal, in other words !=*

#### Jump instructions for unsigned numbers
InstructionDescriptionConditionJE, JZJump if equal (zero)ZF = 1JA, JNBEJump if above (not below or equal)CF = 0 and ZF = 0JB, JNAE, JCJump if below (not above or equal, carry)CF = 1JAE, JNB, JNCJump if above or equal (not below, not carry)CF = 0JBE, JNAJump if below or equal (not above)CF = 1 or ZF = 1
Ok, that's look complicated. I want to give you an example to make it understandable.

    .MODEL SMALL
    
    .STACK 64
    
    .CODE
      MOV AL, 25
      MOV BL, 10
      CMP AL, BL      ;compare AL with BL (I'll explain it later...)
      JE equal        ;if AL = BL, go to equal label
      MOV CL, "N"     ;if it's run here that means AL <> BL
      JMP stop        ;go to stop and move 'N' to CL
    
      equal:          ;if it's come here
      MOV CL, "Y"     ;move 'Y' to CL
    
      stop:
      MOV AH, 02H     ;set interrupt
      MOV DL, CL      ;set interrupt message
      INT 21H
    
      MOV AX, 4C00H   ;terminate
      INT 21H
    
    END               ;exit
    

With this program we can compare 2 integers and tell the user are they equal or not. If you look carefully you'll see `CMP` command, it's comparing 2 integers. If they are equal we move the flow to equal label, if not we are not changing the flow.
