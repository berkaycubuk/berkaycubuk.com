---
title: Java Comments
slug: java-comments
date: 2020-11-18T05:00:00.000Z
date_updated: 2021-02-11T19:08:01.000Z
---

Comments, comments and comments. They're important part of our lives. With comments we can explain what we tried to do on our code.

In java there are 3 types of comments:

- Single line comments
- Multi line comments
- Documentation comments

## Single line comments

Single line comments starts and ends in the same line. To write single line comment just type `//` and write your comment.

    // My hello function
    public void hello()
    {
      // Yes, it prints hello
      System.out.println("Hello!");
    }
    

## Multi line comments

If you want to write something long or more tidy you can use multi line comments. To use it type `/*` and in the of your comment type `*/`. It's important to close your comment.

    /*
      This function prints "Hello" in your console.
    */
    
    public void hello()
    {
      /*
      * Some people use it like that
      */
    
      System.out.println("Hello!");
    }
    

## Documentation comments

With javadoc we can generate documentation for our app. To make it proper we should add some special comments. To start documentation comment type `/**` and in the end close it with `*/`. Also we have some tags available for us.
TagDescriptionSyntax@authorAuthor of class@author name{@code}Displays text in code font without interpreting the text as HTML markup or nested javadoc tags.{@code text}{@docRoot}Represents the relative path to the generated document's root directory from any generated page.{@docRoot}@deprecatedAdds a comment indicating that this API should no longer be used@deprecated deprecatedtext@exceptionAdds a throws subheading to the generated documentation with the classname and description text.@exception class-name description{@inheritDoc}Inherits a comment from the nearest inheritable class or implementable interface.Inherits a comment from the immediate surperclass.{@link}Inserts an in-line link with the visible text label that points to the documentation for the specified package, class, or member name of a referenced class.{@link package.class#member label}{@linkplain}Identical to {@link}, except the link's label is displayed in plain text than code font.{@linkplain package.class#member label}@paramAdds a parameter with the specified parameter-name followed by the specified description to the "Parameters" section.@param parameter-name description@returnAdds a "Returns" section with the description text.@return description@seeAdds a "See Also" heading with a link or text entry that points to reference.@see reference@serialUsed in the doc comment for a default serializable field.@serial field-description@serialDataDocuments the data written by the writeObject( ) or writeExternal( ) methods.@serialData data-description@serialFieldDocuments an ObjectStreamField component.@serialField field-name field-type field-description@sinceAdds a "Since" heading with the specified since-text to the generated documentation.@since release@throwsThe @throws and @exception tags are synonyms.@throws class-name description{@value}When {@value} is used in the doc comment of a static field, it displays the value of that constant.{@value package.class#field}@versionAdds a "Version" subheading with the specified version-text to the generated docs when the -version option is used.@version version-text
That's look boring let's see it on action.

      /**
    * The FindAvg program implements an application that
    * simply calculates average of three integers and Prints
    * the output on the screen.
    *
    * @author  Name
    * @version 1.0
    * @since   2020-11-18
    */
    public class FindAvg
    {
        /**
        * This method is used to find average of three integers.
        * @param numA This is the first parameter to findAvg method
        * @param numB  This is the second parameter to findAvg method
        * @param numC  This is the second parameter to findAvg method
        * @return int This returns average of numA, numB and numC.
        */
        public int findAvg(int numA, int numB, int numC)
        {
            return (numA + numB + numC)/3;
        }
    
        /**
        * This is the main method which makes use of findAvg method.
        * @param args Unused.
        * @return Nothing.
        */
    
        public static void main(String args[])
        {
            FindAvg obj = new FindAvg();
            int avg = obj.findAvg(10, 20, 30);
    
            System.out.println("Average of 10, 20 and 30 is :" + avg);
        }
    }
    

#### References

- [https://www.geeksforgeeks.org/comments-in-java/](https://www.geeksforgeeks.org/comments-in-java/)
