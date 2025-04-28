using System;
using System.Collections.Generic;

public abstract class Animal 
{
    //Set variables
    private string _name;
    private int _age;


    //Set constructors
    public Animal(string name, int age)
    {
        _name = name;
        _age = age;
    }


    //Getters and Setters
    public string GetName()
    {
        return _name;
    }

    public int GetAge()
    {
        return _age;
    }


    //Set methods
    public abstract string GetSound();


    public void DisplayInfo()
    {
        Console.WriteLine($"Name: {_name} | Age: {_age} years old.");
    }
}