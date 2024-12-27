export class Part {
    static Part1 = Object.freeze(`@Ball:true為真，false為假
        @Ball:在電腦的任何地方的真假表示都用true或者false
        @Ball:例如：「今天是星期一嗎？」
        @Ball:如果今天是星期一，電腦就會回答 true；
        @Ball:如果不是，電腦就會回答 false。
        @Ball:「水有毒嗎?」
        @Code:q1
        @Answer:false`);
    static Part2 = Object.freeze(`@Ball:==用來判斷是否相等
        @Ball:如果跟電腦說5 == 5，那電腦就會回答true(真的)
        @Ball:因為 5 跟 5 是一樣的。
        @Ball:但如果跟電腦說5 == 3，那電腦就會回答false(假的)
        @Ball:因為 5 跟 3 不一樣。
        @Ball:「8==8，試問電腦會回答什麼?」
        @Answer:true`);
    static Part3 = Object.freeze(`@Code:println
        @Ball:用來輸出結果，就是讓電腦把東西「寫出來」。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q0
        @Answer:666`);
    static Part4 = Object.freeze(`@Code:equalTrue
        @Ball:這樣電腦會輸出true，因為5跟5是一樣的。
        @Code:equalFalse
        @Ball:那電腦會輸出false，因為5跟3不一樣。
        @Ball:「123和321是否相同?」
        @Code:q2
        @Answer:false`);
    static Part5 = Object.freeze(`@Ball:電腦需要儲存資料時
        @Ball:電腦需要知道資料的長相才能儲存
        @Ball:所以true和false其實是一種特定的「資料長相」
        @Ball:叫做 boolean。
        @Ball:「true和false是什麼?」
        @Answer:boolean`);
    static owo1 = Object.freeze(`@Ball:意思是電腦會用這個 「boolean」 
        @Ball:來儲存只有「真」或「假」的資訊
        @Ball:就像電腦在說：
        @Ball:「喔，這個東西是 boolean，所以它只能是 true 或 false。」
        @Ball:「boolean只能是?」
        @Answer:true或false`);
    static Part6 = Object.freeze(`@Ball:我們還可以用「名字 = 東西;」
        @Ball:來把資料放進剛剛建立的空間裡。
        @Code:declareBool
        @Ball:這樣就是在 isSunny裡存了一個 true
        @Ball:表示今天是晴天。
        @Ball:「isRainy裡面存的是什麼?」
        @Code:q3
        @Answer:false`);
    static Part7 = Object.freeze(`@Ball:而且名字還可以一直用
        @Code:redeclareBool
        @Ball:把裡面的資料換成false，可能原本天氣是晴朗的
        @Ball:但後來天氣變陰了，就可以告訴電腦後來天氣的變化。
        @Ball:「isRainy裡面存的是什麼?」
        @Code:q4
        @Answer:true`);
    static Part8 = Object.freeze(`@Ball:我們還可以一次完成兩件事：
        @Ball:建立空間，然後把資料存進去。
        @Ball:用「長相 名字 = 資料;」的方式
        @Ball:電腦就會自動完成這兩件事。
        @Code:do2Things
        @Ball:「可以使用什麼格式/方式讓電腦自動完成『建立空間，然後把資料存進去』?」
        @Answer:長相 名字 = 資料;`);
    static owo2 = Object.freeze(`@Ball:這樣就直接建立了一個 isSunny 的空間
        @Ball:並且存了 true表示天氣是晴天。
        @Ball:同樣的，如果之後天氣變了
        @Code:do2ThingsReDecBool
        @Ball:可以跟電腦說天氣變陰了。
        @Ball:「下列兩段程式碼是否相等?」
        @Code:q5_1
        @Code:q5_2
        @Answer:true`);
    static Part9 = Object.freeze(`@Ball:!= 就是用來判斷「兩個東西是不是不同」的。
        @Code:notEqualTrue
        @Ball:這樣就會輸出 true，因為 5 和 3 不一樣。
        @Code:notEqualFalse
        @Ball:那它會輸出 false，因為 5 跟 5 是一樣的。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q6
        @Answer:false`);
    static Part10 = Object.freeze(`@Ball:電腦的加減乘除，基本上跟數學一樣
        @Ball:只是乘法和除法的符號稍微不同：
        @Ball:加法：1 + 1，電腦回答 2、
        @Ball:減法：2 - 1，電腦回答 1、
        @Ball:乘法：2 * 1，就是數學的2 × 1，電腦回答 2、
        @Ball:除法：4 / 2，就是數學的4 ÷ 2，電腦回答 2。
        @Ball:「電腦的加減乘除是否和數學一樣?」
        @Code:q1
        @Answer:true`);
    static owo3 = Object.freeze(`@Ball:括號也和數學裡一樣。
        @Ball:所以如果想改變計算的順序
        @Ball:就可以用括號把它包起來。
        @Ball:比如說：(3 + 5) * 2這樣電腦會先算括號裡的 3 + 5 = 8
        @Ball:然後再乘 2，結果就是 16。
        @Ball:但如果沒括號，像這樣： 3 + 5 * 2
        @Ball:電腦會先算乘法 5 * 2 = 10 
        @Ball:然後再加 3，結果是 13。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q7
        @Answer:7`);
    static Part11 = Object.freeze(`@Ball:電腦連大於、小於、大於或等於、小於或等於
        @Ball:這些數學符號也能用，而且和數學完全一樣。
        @Ball:大於：5 > 3電腦會回答 true，因為5比3大、
        @Ball:小於：3 < 5電腦會回答 true，因為3比5小、
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q8_1
        @Answer:false`);
    static owo4 = Object.freeze(`@Ball:大於或等於：5 >= 5
        @Ball:電腦會回答 true，因為 5 等於 5、
        @Ball:小於或等於：3 <= 5
        @Ball:電腦會回答 true，因為 3 比 5 小。
        @Ball:如果程式寫System.out.println(7 >= 8);
        @Ball:這樣就會輸出 false
        @Ball:因為 7 既不比 8 大，也不等於 8。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q8_1
        @Answer:true`);
    static Part12 = Object.freeze(`@Ball:! 是用來反轉 boolean 值的
        @Ball:這就像告訴電腦：「如果它是真的，給我假的；
        @Ball:如果它是假的，給我真的。」
        @Code:reverseF2T
        @Ball:這樣就是先存 false 到 a
        @Ball:然後用 !a 把它反轉，結果就會輸出 true。
        @Code:reverseT2F
        @Ball:這次 b 是 true，反轉後就會輸出 false。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q9
        @Answer:true`);
    static Part13 = Object.freeze(`@Ball:|| 是「或」的意思
        @Ball:只要兩個條件中有一個是真的（true），結果就會是 true；
        @Ball:只有兩個都假的時候，才會是 false。
        @Code:orGateTF
        @Ball:這樣因為 true 和 false 中有一個是真的，所以輸出是 true。
        @Code:orGateFF
        @Ball:這次兩個條件都是假的，所以結果是 false。
        @Ball:那如果兩個條件都是真的呢？
        @Code:orGateTT
        @Ball:它會輸出true，因為有一個真，甚至兩個都真，都符合條件。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q10
        @Answer:true`);
    static Part14 = Object.freeze(`@Ball:&& 是「與」的意思，它的規則是：
        @Ball:只有兩個條件都是真的（true），結果才會是 true；
        @Ball:只要有一個是假的，結果就會是 false。
        @Code:andGateTT 
        @Ball:這樣因為true和true都是真的，所以結果是 true。
        @Code:andGateTF
        @Ball:這次因為其中一個是假的，所以結果是 false。
        @Code:andGateFF
        @Ball:兩個都是假的，結果還是 false。
        @Ball:所以 && 就是要求「全部都要是真的」才能為真。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q11
        @Answer:false`);
    static Part15 = Object.freeze(`@Ball:不只有boolean，還有其他的資料長相
        @Ball:例如不同的數字有不同的「資料長相」。
        @Ball:整數類型：
        @Ball:int：可以儲存大多數情況下需要的整數
        @Ball:比如 int age = 15; 適合大部分場景。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q12
        @Answer:1`);
    static Part17 = Object.freeze(`@Ball:long：如果需要儲存非常大的整數
        @Ball:比如天文數字long population = 7800000000L;
        @Ball:記得在數字後加 L 表示它是 long。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q13
        @Answer:5`);
    static Part18 = Object.freeze(`@Ball:小數類型：
        @Ball:float：用來儲存小數，但精度不高
        @Ball:適合簡單運算：float price = 19.99F;
        @Ball:記得在數字後加 F，表示它是 float。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q14
        @Answer:5.15156156456156`);
    static Part19 = Object.freeze(`@Ball:double：如果需要很高精度
        @Ball:比如很多位小數double pi = 3.141592653589793;
        @Ball:double 的精度比 float 高，非常適合科學計算！
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q15
        @Answer:456456456.1544454545`);
    static Part20 = Object.freeze(`@Ball:每種資料類型都有各自適合的場合。
        @Ball:如果我要儲存一個人的年齡，用 int 就夠了
        @Ball:但如果是天文數字，或者超級精確的小數
        @Ball:就要用 long 或 double。
        @Ball:「當我想要使用的數字超過int的範圍，那我要使用哪個基本資料型態?」
        @Answer:long`);
    static Part21 = Object.freeze(`@Ball:還有一些比較冷門的資料長相。
        @Ball:雖然現在用得少，但它們是程式的基石。
        @Ball:byte：能儲存的數字很小，因為現代電腦運算能力很強
        @Ball:實際上會自動轉成 int，所以一般不用。
        @Ball:例如：byte smallNumber = 100;
        @Ball:「byte會自動轉為何種基本資料型態?」
        @Answer:int`);
    static Part23 = Object.freeze(`@Ball:short：能儲存的數字很小因為現代電腦運算能力很強
        @Ball:實際上會自動轉成 int，用途和 byte 類似
        @Ball:也很少單獨使用。short mediumNumber = 30000;
        @Ball:「short會自動轉為何種基本資料型態?」
        @Answer:int`);
    static Part24 = Object.freeze(`@Ball:char：用來儲存一個字元
        @Ball:包括鍵盤上能打出來的字，或者一些特殊符號。
        @Ball:必須用單引號 ' ' 包起來
        @Ball:比如：char letter = 'A';或char symbol = '#';
        @Ball:它其實儲存的是字元的 編碼值（比如 ASCII 或 Unicode）
        @Ball:所以也能表示一些鍵盤上打不出的特殊字：
        @Ball:char smiley = '\\u263A';
        @Ball:其實是Unicode 編碼，☺ 這樣就能儲存一個笑臉符號。
        @Ball:「char是什麼編碼?」
        @Answer:Unicode`);
    static Part25 = Object.freeze(`@Ball:數字類型像是 int、byte、short 等
        @Ball:也可以進行加減運算，這就和數學一樣。
        @Ball:「boolean是數字類型嗎?」
        @Code:q1
        @Answer:false`);
    static Part26 = Object.freeze(`@Ball:電腦也能根據我們的指令進行加法和減法。
        @Code:add
        @Ball:先告訴電腦要存a，a設定為0，計算a 加 1
        @Ball:然後再把計算結果存回 a，然後就能輸出 1。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q16
        @Answer:11`);
    static Part27 = Object.freeze(`@Code:minus
        @Ball:先告訴電腦要存a，a設定為0，計算a 減 1
        @Ball:然後再把計算結果存回 a，然後就能輸出 -1。
        @Ball:加法和減法很直覺
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q17
        @Answer:3`);
    static Part28 = Object.freeze(`@Ball:還有乘法和除法都能照著數學規則來。
        @Code:multiply
        @Ball:先告訴電腦要存a，a設定為2，計算a 乘2
        @Ball:然後再把計算結果存回 a，然後就能輸出 4。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q18
        @Answer:18`);
    static Part29 = Object.freeze(`@Code:divide 
        @Ball:先告訴電腦要存a，a設定為6，計算a 除以 3
        @Ball:然後再把計算結果存回 a，然後就能輸出 2。
        @Ball:這樣我們就能輕鬆地讓電腦幫我們做數學運算了。
        @Ball:「請回答下列程式碼的輸出?」
        @Code:q19
        @Answer:7`);
    static Part30 = Object.freeze(`@Ball:我們還可以簡寫：a = a + 5; 可以寫成 a += 5;。
        @Ball:a = a - 5; 可以寫成 a -= 5;。
        @Ball:a = a * 5;可以寫成 a *= 5;。
        @Ball:a = a / 5; 可以寫成 a /= 5;。
        @Ball:a += 1; 可以寫成a++。a -= 1; 可以寫成 a--。
        @Ball:「a*=5和a/=9一樣嗎?」
        @Code:q1
        @Answer:false`);
    static _final = Object.freeze(`@Ball:相信你一定有想過
        @Ball:如果我需要儲存一個變量
        @Ball:而不想讓他的值變動(固定值)的話要怎麼辦?
        @Ball:例如：地球有水
        @Code:earthHaveWaterTrue
        @Ball:總不能在寫
        @Code:earthHaveWaterFalse
        @Ball:說地球上沒有水吧。
        @Ball:這時候就可以寫。
        @Code:finalEarthHaveWaterTrue
        @Ball:如果再次使用了
        @Code:earthHaveWaterFalse
        @Ball:就會無法執行。
        @Ball:方法的話也可以，就是讓方法無法被重寫
        @Ball:與abstract相反的作用。
        @Ball:類的話也可以，就是讓類沒辦法繼承
        @Ball:與abstract相反的作用。
        @Ball:「如果我想要儲存一個固定的變量的話要怎麼辦?」
        @Answer:使用final`);
    static Part31 = Object.freeze(`@Ball:class 就像生物分類裡的「屬」
        @Ball:往上可以是「科、目、門」，代表更大的分類；
        @Ball:往下可以是「種」，代表更具體的個體。
        @Ball:比如：假如有個 class 是 Animal（動物）
        @Ball:那它可能是「門」。
        @Ball:再有個 class 是 Mammal（哺乳類）
        @Ball:它就可以是「綱」。
        @Ball:最後有個 class Dog（狗）
        @Ball:它就到具體的「屬」或「種」了。
        @Ball:這樣說，class 就是一種規劃出
        @Ball:「某種東西有什麼特徵」的框架！
        @Ball:但它不會馬上代表一隻具體的狗
        @Ball:而是說明了「狗應該有四隻腳、會叫，還會搖尾巴」
        @Ball:這些基本特徵。
        @Ball:「class是一個什麼?」
        @Answer:框架`);
    static Part32 = Object.freeze(`@Ball:class在檔案當中儲存為.java文件
        @Ball:用資料夾分隔的叫做包(package)。
        @Ball:「用資料夾分隔的叫做?」
        @Answer:包`);
    static Part33 = Object.freeze(`@Ball:一個class可以繼承 (在某class的下屬)
        @Ball:例如：我們說class Dog繼承(extends)自class Animal
        @Code:extend
        @Ball:繼承會帶有上屬class的所有特性
        @Ball:即class Dog會動、沒有細胞壁
        @Ball:這些特性就是繼承自class Animal的。
        @Ball:「繼承會?」
        @Answer:帶有上屬class的所有特性`);
    static Part34 = Object.freeze(`@Ball:Class內可以儲存方法或者變量
        @Ball:儲存方法的形式是：
        @Ball:權限 是否static 是否final/abstract 傳回類型 方法名稱(方法參數列表) {任何程式碼}
        @Ball:如果是static，就直接 類名稱.方法名稱(參數列表)即可訪問。
        @Ball:如果不是static，就直接 類實例.方法名稱(參數列表)即可訪問。
        @Ball:如果要儲存變量，形式為
        @Ball:權限 是否static 是否final 類型 名稱 = 值;
        @Ball:如果是static，就直接 類名稱.變量名稱即可訪問。
        @Ball:如果不是static，就直接 類實例.變量名稱即可訪問。
        @Ball:對於非static的程式碼
        @Ball:可以使用this來取出自己的方法或變量來用
        @Ball:也可以用super取出超類中任一一個超類的方法或變量來用。
        @Ball:「Class內能儲存什麼?」
        @Answer:方法或者變量`);
    static gr = Object.freeze(`@Ball:構造函數用於創建一個class的實例
        @Ball:把class當作是一個模板
        @Ball:物件就是從模板的特徵創立出的物體
        @Ball:可以想像自己是一個造世主
        @Ball:而構造函數就是一個用來創建物體的入口
        @Ball:用來定義出生前的手續
        @Ball:用new 類名稱(參數列表)。
        @Ball:聲明方法：權限 類名稱(參數列表) {任何程式碼}
        @Ball:類似方法，不過沒有傳回值，方法名稱就是類名稱。`);
    static _method = Object.freeze(`@Ball:方法（method）就是程式中用來解決重複問題的工具
        @Ball:這樣可以避免我們重複寫同樣的程式碼
        @Ball:也能保持程式更乾淨、更簡潔。
        @Ball:如何處理重複的計算？
        @Ball:例如，當我們有很多重複的輸出：
        @Code:beforeMethod
        @Ball:這樣的算式有好多相同的部分。
        @Ball:每次都要重複寫，還可能會忘記括號或寫錯，會非常麻煩。
        @Function:q5
        @Ball:解決方法：使用方法（method）
        @Ball:方法就像是事先寫好的方程式，我們只需要給它數字
        @Ball:然後它會回傳結果，這樣就不需要每次都寫一樣的東西了。
        @Code:addMethod
        @Ball:這段程式碼定義了一個名為 add 的方法，它有兩個輸入（a 和 b）
        @Ball:然後它會計算 a + b，並把結果傳回來 (return)。
        @Ball:int為傳回類型，return的東西的類型必須跟這個一樣。
        @Ball:int a, int b為方法的參數列表，任意數量，形式為「類型 名稱」
        @Ball:在第二個開始之後的每個前面都要加上「,」來區分每個參數。
        @Ball:對於每個參數我們把它當作變量的形式，例如：int a = …;。
        @Function:q5
        @Ball:{}為呼叫方法時會執行的程式碼。
        @Ball:當我們想用這個方法來計算 3 + 1 時，我們只需要這樣寫：
        @Code:addExample
        @Ball:這裡的 add(3, 1) 會呼叫 add 方法
        @Ball:把 3 和 1 當作參數傳入方法內，方法內計算出結果 3 + 1 = 4
        @Ball:然後把這個結果傳回來，並輸出4。
        @Ball:當我們不使用方法時，可以直接換成這段程式碼：
        @Code:notUsedExample
        @Ball:其實就是直接寫了計算式 a + b，結果一樣是 4。
        @Ball:這樣我們可以看到，add(3, 1) 和 a + b 做的事一樣，都是將 a 和 b 加起來。
        @Function:q5
        @Ball:原本的程式碼
        @Code:beforeMethod
        @Ball:所以我們也可以寫個方法：
        @Code:realMethod
        @Ball:原本的程式碼就變成：
        @Code:exchangeMethod
        @Function:q5
        @Ball:方法用來：
        @Ball:簡化重複的程式碼：如果算式很長很複雜
        @Ball:我們就可以把它封裝在方法內，每次需要用到時
        @Ball:只需要呼叫這個方法，而不用重複寫。
        @Ball:減少錯誤：只要方法寫一次，其他地方調用時不容易出錯
        @Ball:避免了手動複製貼上可能造成的錯誤。
        @Function:q5
        @Ball:提高可讀性：當我們使用方法來進行計算
        @Ball:程式碼會看起來更簡潔，更容易理解。
        @Ball:方法就像是一個可以重複使用的工具箱，裡面放著各種常用的運算
        @Ball:當我們需要用的時候，就呼叫它，它會幫我們計算
        @Ball:這樣就不需要每次都寫一樣的東西了，還能保持程式更清晰、更高效。
        @Ball:「試問下列兩段程式碼是否相等?」
        @Code:q20_1
        @Code:q20_2
        @Code:q1
        @Answer:true`);
    static _abstract = Object.freeze(`@Ball:對於子類可以重寫父類邏輯
        @Ball:例如：class Dog（狗）繼承自class Animal（動物）
        @Code:abstractBeforeOverride
        @Ball:而class Dog就可以重寫Animal動的方法 (邏輯)
        @Code:abstractAfterOverride
        @Ball:abstract只能用來修飾方法。
        @Function:q5
        @Ball:「abstract只能用來?」
        @Answer:修飾方法`);
    static rg = Object.freeze(`@Ball:在程式語言中，「權限」就像是一個管理誰能做什麼事情的規則。
        @Ball:default（預設權限）：
        @Ball:如果沒有特別標註權限，程式會自動給一個「預設權限」。
        @Ball:預設權限基本上不會有限制
        @Ball:但是它無法跨不同的資料夾來讀寫資料，或者調用方法。
        @Ball:可以想像它像住在同一個公寓樓裡的鄰居大家在一樓活動
        @Ball:但沒辦法進入別人家裡
        @Ball:就是同個資料夾的class(.java)文件可以互相訪問
        @Ball:但不同資料夾就不能訪問了。
        @Ball:「不同資料夾的.java文件可以訪問為default的實例嗎?」
        @Code:q1
        @Answer:false`);
    static gh = Object.freeze(`@Ball:public（公共權限）：
        @Ball:這是完全沒有限制的權限
        @Ball:任何人都可以使用或修改資料。
        @Ball:就像空氣一樣，大家都能接觸到，沒有人會阻止你使用。
        @Ball:「被聲明為public的物件可以被任何.java文件使用嗎?」
        @Code:q1
        @Answer:true`);
    static lp = Object.freeze(`@Ball:private（私有權限）：
        @Ball:這個權限讓物件只能在同一個class（類）內部使用。
        @Ball:外部的人不能訪問或修改。
        @Ball:就像一個家庭的戶口名簿，只有家裡的人可以看
        @Ball:外面的人沒辦法接觸到。
        @Ball:「被聲明為private的物件可以被任何.java文件使用嗎?」
        @Code:q1
        @Answer:false`);
    static po = Object.freeze(`@Ball:protected（保護權限）：
        @Ball:這是繼承的權限，除了同一個class可以訪問
        @Ball:外部的class（類）只要繼承就能使用。
        @Ball:就像繼承父母財產一樣，子女可以使用家裡的東西
        @Ball:但外人繼承後也能使用東西。
        @Ball:如果我要寫程式
        @Ball:這些權限就可以幫助我決定哪些資料或方法應該是對所有人開放的
        @Ball:哪些只能由某些人來處理。
        @Ball:「被聲明為protected的物件可以被外部的繼承類使用嗎?」
        @Code:q1
        @Answer:true`);
}