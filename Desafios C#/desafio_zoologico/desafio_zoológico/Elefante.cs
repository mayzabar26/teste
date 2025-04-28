
public class Elefante : Animal
{
    //Não tem attributes
    //Set constructors
    public Elefante(string name, int age) : base (name, age)
    {

    }

    //Comportamento
    public override string GetSound()
    {
        return "Tram-tram!";
    }
}