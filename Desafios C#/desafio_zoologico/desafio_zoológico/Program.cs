using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {

        //Create list of animals
        List<Animal> animals = new List<Animal>();

        //Adding animals to the list
        animals.Add(new Leao("Simba", 9));
        animals.Add(new Leao("Nala", 8));
        animals.Add(new Leao("Oscar", 16));

        foreach (Animal animal in Animals)
        {
            animal.DisplayInfo();
        }
    }
}