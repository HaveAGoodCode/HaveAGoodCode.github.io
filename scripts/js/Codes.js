class Codes{}Codes.helloWorld=`
        public final class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`,Codes.q0=`
    System.out.println(666);`,Codes.q1=`
    true or false?`,Codes.q2=`
    System.out.println(123 == 321);
    true or false?`,Codes.q3=`
    boolean isRainy;
    isRainy = false;
    true or false?`,Codes.q4=`
    boolean isRainy;
    isRainy = false;
    isRainy = true;
    true or false?`,Codes.q5_1=`
    boolean isWindy = true;`,Codes.q5_2=`
    boolean isWindy;
    isWindy = true;
    true or false?`,Codes.q6=`
    System.out.println(128!=128);
    true or false?`,Codes.q7=`
    System.out.println(2+(6+4)/2);`,Codes.q8_1=`
    System.out.println(561-999<999-666);`,Codes.q8_2=`
    System.out.println(8+4849*9>=32*94+96*12);`,Codes.q9=`
    boolean x = true;
    x = !x;
    System.out.println(!x);`,Codes.q10=`
    boolean x = false;
    boolean y = true;
    System.out.println(x || y);`,Codes.q11=`
    boolean x = false;
    boolean y = true;
    System.out.println(x && y);`,Codes.q12=`
    int i = 1;
    System.out.println(i);`,Codes.q13=`
    long i = 5L;
    System.out.println(i);`,Codes.q14=`
    float i = 5.15156156456156F;
    System.out.println(i);`,Codes.q15=`
    float i = 456456456.1544454545;
    System.out.println(i);`,Codes.q16=`
    int i = 5; i = i + 6; System.out.println(i);`,Codes.q17=`
    int i = 9; i = i - 6; System.out.println(i);`,Codes.q18=`
    int i = 3; i = i * 6; System.out.println(i);`,Codes.q19=`
    int i = 42; i = i / 6; System.out.println(i);`,Codes.q20_1=`
    int average(int x, int y) {
        return (x + y)/2;
    }
    int a = 0;
    int b = 6;
    System.out.println(average(a,b));`,Codes.q20_2=`
    int a = 0;
    int b = 6;
    System.out.println((a + b)/2);`,Codes.println=`
    System.out.println("Hello World!");`,Codes.equalTrue=`
    System.out.println(5 == 5);`,Codes.equalFalse=`
    System.out.println(5 == 3);`,Codes.declareBool=`
    boolean isSunny;
    isSunny = true;`,Codes.redeclareBool=`
    boolean isSunny;
    isSunny = true;
    isSunny = false;`,Codes.do2Things=`
    boolean isSunny = true;`,Codes.do2ThingsReDecBool=`
    isSunny = true;
    isSunny = false;`,Codes.notEqualTrue=`
    System.out.println(5 != 3);`,Codes.notEqualFalse=`
    System.out.println(5 != 5);`,Codes.reverseF2T=`
    boolean a = false;
    System.out.println(!a);`,Codes.reverseT2F=`
    boolean b = true;
    System.out.println(!b);`,Codes.orGateTF=`
    System.out.println(true || false);`,Codes.orGateFF=`
    System.out.println(false || false);`,Codes.orGateTT=`
    System.out.println(true || true);`,Codes.andGateTF=`
    System.out.println(true && true);`,Codes.andGateFF=`
    System.out.println(false && false);`,Codes.andGateTT=`
    System.out.println(true && true);`,Codes.add=`
    int a = 0; a = a + 1; System.out.println(a);`,Codes.minus=`
    int a = 0; a = a - 1; System.out.println(a);`,Codes.multiply=`
    int a = 2; a = a * 2; System.out.println(a);`,Codes.divide=`
    int a = 6; a = a / 3; System.out.println(a);`,Codes.extend=`
    class Animal {}
    class Dog extends Animal{}`,Codes.earthHaveWaterTrue=`
    boolean earthHaveWater = true;`,Codes.earthHaveWaterFalse=`
    earthHaveWater = false;`,Codes.finalEarthHaveWaterTrue=`
    final boolean earthHaveWater = true;`,Codes.beforeMethod=`
    System.out.println((a+b) + (a-b) - (a*b) * (a/b) / (a+b));
    System.out.println((c+d) + (c-d) - (c*d) * (c/d) / (c+d));
    System.out.println((e+f) + (e-f) - (e*f) * (e/f) / (e+f));
    System.out.println((g+h) + (g-h) - (g*h) * (g/h) / (g+h));`,Codes.addMethod=`
    int add(int a, int b) { return a + b; }`,Codes.addExample=`
    System.out.println(add(3, 1));`,Codes.notUsedExample=`
    int a = 3; int b = 1; System.out.println(a + b);`,Codes.realMethod=`
    int abc(int x, int y) {
        return (x+y) + (x-y) - (x*y) * (x/y) / (x+y);
    }`,Codes.exchangeMethod=`
    System.out.println(abc(a, b)); 
    System.out.println(abc(c, d));
    System.out.println(abc(e, f)); 
    System.out.println(abc(g, h));`,Codes.abstractBeforeOverride=`
    abstract class Animal {
        abstract int method();
    }
    class Dog extends Animal {}`,Codes.abstractAfterOverride=`
    abstract class Animal {
        abstract int method();
    }
    class Dog extends Animal {
        int method() {
            return 0;
        }
    }`;export default Codes;