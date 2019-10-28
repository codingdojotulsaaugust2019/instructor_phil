namespace FirstProject
{
    public class Robot
    {
        public string HardWare;
        public Robot(string HW)
        {
            HardWare = HW;
            System.Console.WriteLine("HardWare set from constructor");
        }
    }
}