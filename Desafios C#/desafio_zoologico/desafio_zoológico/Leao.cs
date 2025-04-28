
public class Leao : Animal
{
    //Não tem attributes
    //Set constructors
    public Leao(string name, int age) : base (name, age)
    {

    }

    //Comportamento
    public override string GetSound()
    {
        return "Rooooar!";
    }
}