export default class Codes {
    public static readonly helloWorld: string = `
        public final class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`;
    public static readonly q0: string = `
    System.out.println(666);`;
    public static readonly q1: string = `
    true or false?`;
    public static readonly q2: string = `
    System.out.println(123 == 321);
    true or false?`;
    public static readonly q3: string = `
    boolean isRainy;
    isRainy = false;
    true or false?`;
    public static readonly q4: string = `
    boolean isRainy;
    isRainy = false;
    isRainy = true;
    true or false?`;
    public static readonly q5_1: string = `
    boolean isWindy = true;`;
    public static readonly q5_2: string = `
    boolean isWindy;
    isWindy = true;
    true or false?`;
    public static readonly q6: string = `
    System.out.println(128!=128);
    true or false?`;
    public static readonly q7: string = `
    System.out.println(2+(6+4)/2);`;
    public static readonly q8_1: string = `
    System.out.println(561-999<999-666);`;
    public static readonly q8_2: string = `
    System.out.println(8+4849*9>=32*94+96*12);`;
    public static readonly q9: string = `
    boolean x = true;
    x = !x;
    System.out.println(!x);`;
    public static readonly q10: string = `
    boolean x = false;
    boolean y = true;
    System.out.println(x || y);`;
    public static readonly q11: string = `
    boolean x = false;
    boolean y = true;
    System.out.println(x && y);`;
    public static readonly q12: string = `
    int i = 1;
    System.out.println(i);`;
    public static readonly q13: string = `
    long i = 5L;
    System.out.println(i);`;
    public static readonly q14: string = `
    float i = 5.15156156456156F;
    System.out.println(i);`;
    public static readonly q15: string = `
    float i = 456456456.1544454545;
    System.out.println(i);`;
    public static readonly q16: string = `
    int i = 5; i = i + 6; System.out.println(i);`;
    public static readonly q17: string = `
    int i = 9; i = i - 6; System.out.println(i);`;
    public static readonly q18: string = `
    int i = 3; i = i * 6; System.out.println(i);`;
    public static readonly q19: string = `
    int i = 42; i = i / 6; System.out.println(i);`;
    public static readonly q20_1: string = `
    int average(int x, int y) {
        return (x + y)/2;
    }
    int a = 0;
    int b = 6;
    System.out.println(average(a,b));`;
    public static readonly q20_2: string = `
    int a = 0;
    int b = 6;
    System.out.println((a + b)/2);`;

    public static readonly println: string = `
    System.out.println("Hello World!");`;
    public static readonly equalTrue: string = `
    System.out.println(5 == 5);`;
    public static readonly equalFalse: string = `
    System.out.println(5 == 3);`;
    public static readonly declareBool: string = `
    boolean isSunny;
    isSunny = true;`;
    public static readonly redeclareBool: string = `
    boolean isSunny;
    isSunny = true;
    isSunny = false;`;
    public static readonly do2Things: string = `
    boolean isSunny = true;`;
    public static readonly do2ThingsReDecBool: string = `
    isSunny = true;
    isSunny = false;`;
    public static readonly notEqualTrue: string = `
    System.out.println(5 != 3);`;
    public static readonly notEqualFalse: string = `
    System.out.println(5 != 5);`;
    public static readonly reverseF2T: string = `
    boolean a = false;
    System.out.println(!a);`;
    public static readonly reverseT2F: string = `
    boolean b = true;
    System.out.println(!b);`;
    public static readonly orGateTF: string = `
    System.out.println(true || false);`;
    public static readonly orGateFF: string = `
    System.out.println(false || false);`;
    public static readonly orGateTT: string = `
    System.out.println(true || true);`;
    public static readonly andGateTF: string = `
    System.out.println(true && true);`;
    public static readonly andGateFF: string = `
    System.out.println(false && false);`;
    public static readonly andGateTT: string = `
    System.out.println(true && true);`;
    public static readonly add: string = `
    int a = 0; a = a + 1; System.out.println(a);`;
    public static readonly minus: string = `
    int a = 0; a = a - 1; System.out.println(a);`;
    public static readonly multiply: string = `
    int a = 2; a = a * 2; System.out.println(a);`;
    public static readonly divide: string = `
    int a = 6; a = a / 3; System.out.println(a);`;
    public static readonly extend: string = `
    class Animal {}
    class Dog extends Animal{}`;
    public static readonly earthHaveWaterTrue: string = `
    boolean earthHaveWater = true;`;
    public static readonly earthHaveWaterFalse: string = `
    earthHaveWater = false;`;
    public static readonly finalEarthHaveWaterTrue: string = `
    final boolean earthHaveWater = true;`;
    public static readonly beforeMethod: string = `
    System.out.println((a+b) + (a-b) - (a*b) * (a/b) / (a+b));
    System.out.println((c+d) + (c-d) - (c*d) * (c/d) / (c+d));
    System.out.println((e+f) + (e-f) - (e*f) * (e/f) / (e+f));
    System.out.println((g+h) + (g-h) - (g*h) * (g/h) / (g+h));`;
    public static readonly addMethod: string = `
    int add(int a, int b) { return a + b; }`;
    public static readonly addExample: string = `
    System.out.println(add(3, 1));`;
    public static readonly notUsedExample: string = `
    int a = 3; int b = 1; System.out.println(a + b);`;
    public static readonly realMethod: string = `
    int abc(int x, int y) {
        return (x+y) + (x-y) - (x*y) * (x/y) / (x+y);
    }`;
    public static readonly exchangeMethod: string = `
    System.out.println(abc(a, b)); 
    System.out.println(abc(c, d));
    System.out.println(abc(e, f)); 
    System.out.println(abc(g, h));`;
    public static readonly abstractBeforeOverride: string = `
    abstract class Animal {
        abstract int method();
    }
    class Dog extends Animal {}`;
    public static readonly abstractAfterOverride: string = `
    abstract class Animal {
        abstract int method();
    }
    class Dog extends Animal {
        int method() {
            return 0;
        }
    }`;
}