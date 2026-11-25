const n={"MMAP-P0-100-2605-n7":{max:2,solution:`Liczba 7n^2 + 21n jest podzielna przez 7 jako suma dwóch liczb podzielnych przez 7.
Gdy liczba n jest parzysta, to liczby 7n^2 oraz 21n są parzyste, więc liczba 7n^2 + 21n
jest parzysta jako suma dwóch liczb parzystych.
Gdy liczba n jest nieparzysta, to liczby 7n^2 oraz 21n są nieparzyste jako iloczyny liczb
nieparzystych i w konsekwencji liczba 7n^2 + 21n jest parzysta jako suma dwóch liczb
nieparzystych.
Zatem liczba 7n^2 + 21n jest podzielna przez 2 i przez 7. Liczby 2 i 7 są względnie
pierwsze, więc liczba 7n^2 + 21n jest podzielna przez 2 ⋅ 7 = 14. To należało wykazać.`,levels:[{points:2,alts:["przeprowadzenie pełnego rozumowania, tj. • uzasadnienie, że liczba 7n^2 + 21n jest podzielna przez 7 i przez 2 LUB • rozpatrzenie przypadku, gdy n = 2k, tj. uzasadnienie, że liczba 7 ⋅ (2k)^2 + 21 ⋅ (2k) jest podzielna przez 14, oraz rozpatrzenie przypadku, gdy n = 2k + 1, tj. uzasadnienie, że liczb"]},{points:1,alts:["uzasadnienie, że liczba 7n^2 + 21n jest podzielna przez 7","uzasadnienie, że liczba 7n^2 + 21n jest podzielna przez 2","rozpatrzenie przypadku, gdy n = 2k, tj. uzasadnienie, że liczba 7 ⋅ (2k)^2 + 21 ⋅ (2k) jest podzielna przez 14","rozpatrzenie przypadku, gdy n = 2k + 1, tj. uzasadnienie, że liczba 7 ⋅ (2k + 1)^2 + 21 ⋅ (2k + 1) jest podzielna przez 14."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-P0-100-2605-n12-2":{max:2,levels:[{points:2,alts:["poprawne uzupełnienie dwóch zdań."]},{points:1,alts:["poprawne uzupełnienie jednego zdania."]},{points:0,alts:["brak spełnienia powyższych kryteriów."]}]},"MMAP-R0-100-2405-n1":{max:2,solution:`Z warunków zadania T(10) = 65, więc 65 = (80 − 20) ⋅ k^(−10) + 20 i stąd
45 3
k^(−10) = = . Zatem
60 4
−10 1,5
T(15) = (80 − 20) ⋅ k^(−15) + 20 = 60 ⋅ (k ) + 20 =
= 60 ⋅ ( (3 1,5/()))/4 + 20 = 60 ⋅ 3/4 ⋅ √3/2 + 20 = 45√3/2 + 20 ≈ 59
Temperatura kawy po następnych pięciu minutach była równa 59 °C.`,levels:[{points:2,alts:["poprawna metoda obliczenia temperatury kawy po 15 minutach oraz poprawny wynik zaokrąglony do jedności: 59 °C. 45"]},{points:1,alts:["obliczenie k^(−10) : . 60"]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2405-n13-1":{max:2,solution:`Rozpatrzmy dowolny z rozważanych graniastosłupów. Oznaczmy jego wysokość przez H.
Korzystamy ze wzoru na objętość graniastosłupa oraz wzoru na pole trójkąta
równobocznego i otrzymujemy:
a^2
3456 = √3/4 ⋅ H
(H= 4608√3/2)/(a)
Stąd oraz ze wzoru na pole powierzchni całkowitej graniastosłupa dostajemy
a^2
P = 2 ⋅ √3/4 + 3aH
a^2 √3
P =
(+3a⋅ 4608√3/2)/(a)
2
a^2
P(a) = √3/2 + 13824√3/(a)`,levels:[{points:2,alts:["przeprowadzenie pełnego rozumowania."]},{points:1,alts:["wyznaczenie wysokości H graniastosłupa w zależności od długości krawędzi podstawy, np. (H= 13824/2√ .)/(a) 3"]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2605-n1":{max:2,solution:`Stosujemy wzór na symbol Newtona i otrzymujemy
(n − 1)!n(n + 1)(n + 2) n(n + 1)(n + 2)
( (n+2)/(n−1) ) = =
3!(n − 1)! 6
dla każdej liczby naturalnej n ≥ 1.
Obliczamy granicę ciągu
1
Rozporządzenie Ministra Edukacji z dnia 28 czerwca 2024 r. zmieniające rozporządzenie w sprawie podstawy
programowej kształcenia ogólnego dla liceum ogólnokształcącego, technikum oraz branżowej szkoły II stopnia
(Dz.U. z 2024 r. poz. 1019).
n(n + 1)(n + 2) 3 2
( ((n+2)/()))/(n−1) n^3 ⋅ (1 + + )
6 n^2
lim = lim = lim (n)/4 =
n→+∞ 1 n→+∞ 1 n→+∞ 1 7
n^3 − 4n + 7 n^3 − 4n + 7 6n^3 ⋅ ( − + )
2 2 2 n^2 n^3
3
1 + + 2/2
1
n n
= lim =
n→+∞ 1 3
6 ⋅ ( −
(4/2 +)/(n) (7/3 ))/(n)
2`,levels:[{points:2,alts:["zastosowanie poprawnej metody i poprawny wynik: (1/3 .)/((n−1)!n(n+1)(n+2))"]},{points:1,alts:["zapisanie wyrażenia ( (n+2)/(n−1) ) w postaci lub w postaci [n + 2 − (n − 1)]! (n − 1)! (n(n+1)(n+2))/6 ."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2605-n3":{max:3,solution:`Sposób I (suma sześcianów)
Z założenia x > 0 oraz y > 0, więc x^2 y^2 > 0. Mnożymy obie strony nierówności
1 1 x y
+ ≤ + przez x^2 y^2 i otrzymujemy
x y
y^2 x^2
xy^2 + yx^2 ≤ x^3 + y^3
Stosujemy wzór na sumę sześcianów oraz kwadrat różnicy i dostajemy:
xy(x + y) ≤ (x + y)(x^2 − xy + y^2 )
0 ≤ (x + y)(x^2 − 2xy + y^2 )
0 ≤ (x + y)(x − y)^2
Ponieważ (x + y) jest dodatnie jako suma dwóch liczb dodatnich x oraz y, a ponadto
(x − y)^2 jest nieujemne jako kwadrat liczby rzeczywistej (x − y), więc (x + y)(x − y)^2
jest nieujemne jako iloczyn liczby dodatniej i nieujemnej. Zatem nierówność
0 ≤ (x + y)(x − y)^2 jest prawdziwa dla każdej liczby dodatniej x i dla każdej liczby
dodatniej y. To oznacza, że dla każdej liczby dodatniej x i każdej liczby dodatniej y
nierówność 1/(x) + 1/(y) ≤ jest również prawdziwa.
((x)/2 +)/(y) ((y)/2)/(x)
To należało wykazać.`,levels:[{points:3,alts:["poprawne przekształcenia i przeprowadzenie pełnego rozumowania, tj.: 1 1 x y • przekształcenie nierówności + ≤ + do postaci (x − y)^2 ≥ 0 (lub do x y y^2 x^2 postaci ((x−y))/2 ≥ 0) i zapisanie, że kwadrat każdej liczby rzeczywistej jest x y^2 nieujemny","1 1 x y • przekształcenie nierówności + ≤ + do postaci (x + y)(x − y)^2 ≥ 0 x y y^2 x^2 (lub do postaci ((x+y)(x−y))/2 ≥ 0) oraz uzasadnienie, że dla liczb dodatnich x y^2 (x + y)(x − y)^2 x, y nierówność (x + y)(x − y)^2 ≥ 0 (lub nierówność ≥ 0) x^2 y^2 jest prawdziwa","• obliczenie miejsca zerowego pochodnej funkcji f oraz uzasadnienie, że funkcja f osiąga wartość najmniejszą dla x = y i obliczenie f(y). 1 1 x y"]},{points:2,alts:["przekształcenie nierówności + ≤ + do postaci x^2 − 2xy + y^2 ≥ 0 (lub x y y^2 x^2 x^2 do postaci (−2xy+y)/2 ≥ 0) x y^2","1 1 x y przekształcenie nierówności + ≤ + do postaci (x + y)(x − y)^2 ≥ 0 (lub x y y^2 x^2 do postaci ((x+y)(x−y))/2 ≥ 0), x y^2","obliczenie miejsca zerowego pochodnej funkcji f: x = y."]},{points:1,alts:["przekształcenie nierówności do postaci W(x,y) ≥ 0 (lub do postaci (W(x,y))/2 ≥ 0), gdzie W jest wielomianem zmiennych x oraz y, np.: x y^2 x^3 + y^3 − xy^2 − x^2 y x^3 + y^3 − xy^2 − x^2 y ≥ 0, x^3 + y^3 − xy(x + y) ≥ 0, ≥ 0 x^2 y^2","(x + y)(x^2 ) przekształcenie nierówności do postaci ≥ (x+y)/(xy) , 2 ((−xy+y)/2)/(y) x","rozważenie funkcji f(x) = zmiennej dodatniej x z parametrem ((x)/2 +)/(y) ((y)/2 − 1/(x) − 1/(y))/(x) 1 2y 1 ′ y > 0 oraz wyznaczenie pochodnej tej funkcji, np. f (x) = − + . y^2 x^3 x^2"]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MPOP-P1-P2-2305-nA1-12-1":{max:1,answer:["Fragment A: Dziady cz. III"],levels:[{points:1,alts:["poprawne podanie tytułu utworu, z którego pochodzi fragment A i tytułu utworu, z którego pochodzi fragment B."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2605-nA1-11-1":{max:1,answer:["Rzecki / Ignacy Rzecki / I. Rzecki"],levels:[{points:1,alts:["poprawne podanie nazwiska bohatera Lalki."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2605-nA1-12-2":{max:1,answer:["Przykład Nazwa środka wyrazu artystycznego • przenośnia/metafora • ożywienie/animizacja Dusza [...] łka • uosobienie/personifikacja • antropomorfizacja • wyraz dźwiękonaśladowczy / onomatopeja • epitet Zapomniane [...] bogi • archaizm"],levels:[{points:1,alts:["poprawne uzupełnienie dwóch wierszy tabeli."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi."]}]},"MJAP-P0-100-2408-n5":{max:7,levels:[{points:1,alts:["poprawna odpowiedź."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi. cej arkuszy znajdziesz na stronie: arkusze.pl ę Wi"]}]},"MMAP-P0-100-2506-n5":{max:3,solution:`Ponieważ liczba całkowita a przy dzieleniu przez 5 daje resztę 1, natomiast liczba
całkowita b przy dzieleniu przez 5 daje resztę 4, więc liczby a i b możemy zapisać
w postaci: a = 5k + 1, gdzie k ∈ Z, oraz b = 5l + 4, gdzie l ∈ Z.
Wtedy
cej arkuszy znajdziesz na stronie: arkusze.pla^2 − b^2 = (5k + 1)^2 − (5l + 4)^2 = 25k^2 + 10k + 1 − 25l^2 − 40l − 16 =
ę
Wi
= 25k^2 + 10k − 25l^2 − 40l − 15 = 5 ⋅ (5k^2 + 2k − 5l^2 − 8l − 3)
Liczba 5k^2 + 2k − 5l^2 − 8l − 3 jest całkowita, co oznacza, że liczba a^2 − b^2 jest
podzielna przez 5.
To należało wykazać.`},"MMAP-P0-100-2508-n5":{max:2,solution:`Korzystamy z własności działań na potęgach i otrzymujemy:
8^50 − 2^145 = (2^3 )^50 − 2^145 = 2^150 − 2^145
Wyłączamy wspólny czynnik przed nawias:
2^150 − 2^145 = 2^145 ⋅ (2^5 − 1) = 2^145 ⋅ 31
Liczba 2^145 jest liczbą całkowitą, zatem liczba 8^50 − 2^145 jest podzielna przez 31.`,levels:[{points:2,alts:["poprawne przekształcenia i przeprowadzenie pełnego rozumowania. cej arkuszy znajdziesz na stronie: arkusze.pl ę 1 pkt – przekształcenie wyrażenia 8^50 − 2^145 do postaci 2^150 − 2^145 . Wi"]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-P0-100-2508-n12-1":{max:2,levels:[{points:2,alts:["poprawne uzupełnienie dwóch zdań."]},{points:1,alts:["poprawne uzupełnienie jednego zdania."]},{points:0,alts:["brak spełnienia powyższych kryteriów. cej arkuszy znajdziesz na stronie: arkusze.pl ę Rozwiązanie Wi 1. Miejscem zerowym funkcji f jest liczba 1. 2. Wartość wyrażenia f(−2) + 3 ⋅ f(2) jest równa 0."]}]},"MMAP-P0-100-2603-n5":{max:2,solution:`Korzystamy z własności działań na potęgach oraz ze wzoru na różnicę kwadratów
i otrzymujemy:
2501^4 − 2499^4 = (2501^2 )^2 − (2499^2 )^2 = (2501^2 − 2499^2 )(2501^2 + 2499^2 ) =
= (2501 − 2499)(2501 + 2499)(2501^2 + 2499^2 ) =
= 2 ⋅ 5000 ⋅ (2501^2 + 2499^2 ) = 10000 ⋅ (2501^2 + 2499^2 )
Liczba 2501^2 + 2499^2 jest liczbą całkowitą, zatem liczba 2501^4 − 2499^4 jest podzielna
przez 10000.`},"MMAP-P0-100-2603-n11-3":{max:2,levels:[{points:2,alts:["poprawne uzupełnienie dwóch zdań."]},{points:1,alts:["poprawne uzupełnienie jednego zdania."]},{points:0,alts:["brak spełnienia powyższych kryteriów."]}]},"MMAP-P0-100-2606-n5":{max:2,solution:`Korzystamy z własności działań na potęgach i otrzymujemy:
n n+1 n+2 n n n
7 + 7 + 7 = 7 + 7 ⋅ 7 + 7 ⋅ 7^2
Wyłączamy wspólny czynnik przed nawias i otrzymujemy:
n n n n n n
7 + 7 ⋅ 7 + 7 ⋅ 7^2 = 7 ⋅ (1 + 7 + 7^2 ) = 7 ⋅ 57 = 19 ⋅ 3 ⋅ 7
n
Liczba 3 ⋅ 7 jest liczbą całkowitą dla każdej liczby całkowitej n ≥ 0, zatem liczba
n n+1 n+2
7 + 7 + 7 jest podzielna przez 19 dla każdej liczby całkowitej n ≥ 0.`,levels:[{points:2,alts:["poprawne przekształcenia i przeprowadzenie pełnego rozumowania. n n+1 n+2 n"]},{points:1,alts:["przekształcenie wyrażenia 7 + 7 + 7 do postaci 7 ⋅ (1 + 7 + 7^2 ). cej arkuszy znajdziesz na stronie: arkusze.pl ę Wi 0 pkt – rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-P0-100-2606-n12-2":{max:2,levels:[{points:2,alts:["poprawne uzupełnienie dwóch zdań."]},{points:1,alts:["poprawne uzupełnienie jednego zdania."]},{points:0,alts:["brak spełnienia powyższych kryteriów."]}]},"MMAP-P0-100-2606-n20":{max:2,solution:`Niech |∡CAB| = α oraz |∡ABE| = β (zobacz rysunek). Wtedy tezę możemy zapisać
w postaci α = 2β.
C
cej arkuszy znajdziesz na stronie: arkusze.pl
ę
Wi
E
α
β
A D B
Z równości |DB| = |DE| wynika, że trójkąt DBE jest równoramienny. Stąd:
|∡BED| = |∡DBE| = β
Zatem z twierdzenia o sumie miar kątów wewnętrznych trójkąta wynika, że:
|∡EDB| = 180° − 2β
Trójkąt ADC jest prostokątny i punkt E jest środkiem jego przeciwprostokątnej (tzn. że
punkt E jest środkiem okręgu opisanego na trójkącie ADC), więc:
|AE| = |DE| = |CE|
Stąd wynika, że trójkąt ADE jest równoramienny, zatem:
|∡ADE| = |∡EAD| = α
Kąty ADE i EDB są przyległe, więc:
α = |∡ADE| = 180° − |∡EDB| = 180° − (180° − 2β) = 2β
Zatem α = 2β. To kończy dowód.
Uwaga.
Równość |∡ADE| = 2β możemy też otrzymać, korzystając z twierdzenia o kącie
zewnętrznym trójkąta.`,levels:[{points:2,alts:["przeprowadzenie pełnego rozumowania."]},{points:1,alts:["zapisanie, że |AE| = |DE|","zapisanie, że |∡EAD| = |∡ADE|","zapisanie, że |∡BED| = |∡DBE|","wyznaczenie zależności między miarami kątów ADE i ABE, np. |∡ADE| = 2 ⋅ |∡ABE|."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-P0-100-2608-n11":{max:3,levels:[{points:3,alts:["poprawne uzupełnienie trzech zdań."]},{points:2,alts:["poprawne uzupełnienie dwóch zdań."]},{points:1,alts:["poprawne uzupełnienie jednego zdania."]},{points:0,alts:["brak spełnienia powyższych kryteriów. cej arkuszy znajdziesz na stronie: arkusze.pl ę Wi Uwaga: Uzupełnienie zdania uznaje się za poprawne tylko wtedy, gdy zapisane krańce przedziału są poprawne i można jednoznacznie ustalić, czy przedział zapisany przez zdającego jest otwarty czy domknięty."]}]},"MMAP-R0-100-2406-n5":{max:3,solution:`Ponieważ a > 0 i b > 0, więc (2a + b)(a + 2b) > 0.
Przekształcamy równoważnie nierówność 1/(2a+b) + 1/(a+2b) ≥ 4/3 i otrzymujemy:
1/(+b) + 1/(+2b) ≥ 4/3
2a a
(3(a+2b))/(3(2a) + (3(2a+b))/(+2b)(2a+b)) − (4(a+2b)(2a+b))/(3(a+2b)(2a+b)) ≥ 0
+ b)(a + 2b) 3(a
(3a+6b+6a+3b−8a)/(3(2a) (−20ab−8b)/(+b)(a+2b)) ≥ 0
(9a+9b−8a)/(3(2a) (−20ab−8b)/(+b)(a+2b)) ≥ 0
9a + 9b − 8a^2 − 20ab − 8b^2 ≥ 0
Korzystamy z założenia i otrzymujemy dalej
9a + 9(1 − a) − 8a^2 − 20a(1 − a) − 8(1 − a)^2 ≥ 0
4a^2 − 4a + 1 ≥ 0
(2a − 1)^2 ≥ 0
Kwadrat każdej liczby rzeczywistej jest liczbą nieujemną, więc nierówność (2a − 1)^2 ≥ 0
jest prawdziwa dla każdej liczby rzeczywistej a. To oznacza, że nierówność
1/(2a+b) + 1/(a+2b) ≥ 4/3 jest prawdziwa dla każdej liczby rzeczywistej dodatniej a i dla każdej
liczby rzeczywistej dodatniej b takich, że a + b = 1.`,levels:[{points:3,alts:["przeprowadzenie pełnego rozumowania."]},{points:2,alts:["wykorzystanie założenia i przekształcenie nierówności do (1/(2a+b) + 1/(a+2b) ≥ 4/3)/2 postaci 4a^2 − 4a + 1 ≥ 0, 4b^2 − 4b + 1 ≥ 0 albo a − 2ab + b^2 ≥ 0","zapisanie nierówności między odpowiednimi średnimi liczb 1/(2a+b) oraz 1/(a+2b) (lub między odpowiednimi średnimi liczb 2a + b oraz a + 2b) i przekształcenie tej nierówności do postaci, z której można bezpośrednio wnioskować o prawdziwości 2 tezy, np. 3/2 ≥ . 1/(2a+b) + 1/(a+2b)"]},{points:1,alts:["zapisanie nierówności w postaci równoważnej jako nierówności wymiernej 3(a+2b)+3(2a+b)−4(a+2b)(2a+b) (P(a,b))/(Q(a,b)) ≥ 0, np. ≥ 0 3(2a+b)(a+2b)","zapisanie nierówności w postaci równoważnej jako nierówności wielomianowej, np. 3(1 + b) + 3(a + 1) ≥ 4(a + 1)(1 + b)","1 cej arkuszy znajdziesz na stronie: arkusze.pl– zapisanie nierówności między średnią harmoniczną a arytmetyczną liczb ę Wi (2a+b)/(a+2b),np.) oraz (lub między odpowiednimi średnimi liczb 2a + b oraz (1/(a+2b))/1 1 + 2a+b a+2b 2 2 ≥ , (2a+b+a+2b)/2 ≥ , 2 + 1/(2a+b) + 1/(a+2b) (1/1)/(2a+b) (1/1)/(a+2","wykorzystanie założenia i zapisanie nierówności w postaci równoważnej jako nierówności wymiernej z jedną niewiadomą, np. 1/(2a+(1−a)) + 1/(a+2(1−a)) ≥ 4/3 ."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2606-n4":{max:3,solution:`Przekształcamy nierówność równoważnie i otrzymujemy:
xy + x + y ≤ x^2 + y^2 + 1
2xy + 2x + 2y ≤ 2x^2 + 2y^2 + 2
0 ≤ x^2 − 2xy + y^2 + x^2 − 2x + 1 + y^2 − 2y + 1
0 ≤ (x − y)^2 + (x − 1)^2 + (y − 1)^2
Wszystkie składniki sumy (x − y)^2 + (x − 1)^2 + (y − 1)^2 są nieujemne jako kwadraty
liczb rzeczywistych, więc nierówność 0 ≤ (x − y)^2 + (x − 1)^2 + (y − 1)^2 jest prawdziwa
dla każdej liczby rzeczywistej x i dla każdej liczby rzeczywistej y. Zatem nierówność
xy + x + y ≤ x^2 + y^2 + 1 jest również prawdziwa dla każdej liczby rzeczywistej x i dla
każdej liczby rzeczywistej y.
To należało wykazać.`,levels:[{points:3,alts:["poprawne przekształcenia i przeprowadzenie pełnego rozumowania."]},{points:2,alts:["przekształcenie nierówności do postaci, z której można bezpośrednio wnioskować o prawdziwości nierówności, np. 0 ≤ (x − y)^2 + (x − 1)^2 + (y − 1)^2 (dla sposobu I)","przekształcenie nierówności do postaci uporządkowanej nierówności kwadratowej ze względu na niewiadomą x (lub niewiadomą y) oraz wyznaczenie i przeprowadzenie analizy znaku wyróżnika odpowiedniego trójmianu kwadratowego, np. poprzez zapisanie wyróżnika w postaci, z której można bezpośrednio wnioskow","przekształcenie nierówności do postaci 0 ≤ (x − 1)^2 − (x − 1)(y − 1) + (y − 1)^2 (dla sposobu III)."]},{points:1,alts:["pomnożenie obu stron nierówności przez 2 i przekształcenie nierówności do postaci, w której występuje co najmniej jeden z następujących kwadratów: (x − y)^2 lub (x − 1)^2 , lub (y − 1)^2 , np. (x − y)^2 + x^2 + y^2 − 2x − 2y + 2 ≥ 0 (dla sposobu I)","przekształcenie nierówności do postaci uporządkowanej nierówności kwadratowej ze cej arkuszy znajdziesz na stronie: arkusze.plwzględu na niewiadomą x (lub niewiadomą y) oraz wyznaczenie wyróżnika ę odpowiedniego trójmianu kwadratowego, np. 0 ≤ x^2 − (y + 1)x + (y^2 − y + 1) Wi oraz Δ = −3y^2 + 6y − ","przekształcenie nierówności do postaci 0 ≤ [(x − 1) − (y − 1)]^2 + (x − 1)(y − 1) (dla sposobu III)."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2606-n5":{max:3,solution:`Ponieważ trójkąt ABC jest równoramienny i CD jest osią symetrii tego trójkąta, więc
|∡KAC| = |∡KBC| = |∡KBL|.
Ponieważ |∡KDB| = 90° oraz |∡BLK| = 90°, więc na czworokącie DBLK można opisać
okrąg. W tym okręgu kąty wpisane KDL i KBL są oparte na tym samym łuku, więc mają
równe miary. Zatem |∡KAC| = |∡KBL| = |∡KDL|.
To należało wykazać.`,levels:[{points:3,alts:["poprawne przekształcenia i przeprowadzenie pełnego rozumowania.","poprawne przekształcenia i przeprowadzenie pełnego rozumowania."]},{points:2,alts:["zapisanie, że |∡KAC| = |∡KBC| oraz zapisanie wraz z uzasadnieniem, że na czworokącie DBLK można opisać okrąg","zapisanie wraz z uzasadnieniem, że na czworokącie DBLK można opisać okrąg oraz zapisanie wraz z uzasadnieniem, że |∡KBL| = |∡KDL|.","zapisanie wraz z uzasadnieniem, że na czworokącie MDLC można opisać okrąg oraz zapisanie, że |∡CML| = |∡CDL|","zapisanie wraz z uzasadnieniem, że na czworokącie MAKC można opisać okrąg oraz zapisanie, że |∡CMK| = |∡CAK|","zapisanie wraz z uzasadnieniem, że na czworokącie MDLC można opisać okrąg oraz zapisanie wraz z uzasadnieniem, że na czworokącie MAKC można opisać okrąg."]},{points:1,alts:["zapisanie, że |∡KAC| = |∡KBC|","zapisanie wraz z uzasadnieniem, że na czworokącie DBLK można opisać okrąg. cej arkuszy znajdziesz na stronie: arkusze.pl0 pkt – rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania. ę Wi","zapisanie wraz z uzasadnieniem, że na czworokącie MDLC można opisać okrąg","zapisanie wraz z uzasadnieniem, że na czworokącie MAKC można opisać okrąg."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MPOP-P1-P2-2308-nA1-3":{max:2,answer:["Zagadnienia Kolejność Przybliżenie roli współczesnej nauki w analizowaniu przebiegu procesu 3 myślenia. Zaprezentowanie powszechnego poglądu na temat przebiegu procesu 1 myślenia. Podkreślenie znaczenia symulacji dla zrozumienia wypowiedzi 4 sformułowanych w języku naturalnym. Przedstawienie dwóch koncepcji wyjaśniających rolę języka ojczystego 2 w procesie myślenia."],levels:[{points:2,alts:["poprawne uprządkowanie wszystkich zagadnień."]},{points:1,alts:["poprawne określenie kolejności występowania w tekście dwóch albo trzech zagadnień."]},{points:0,alts:["poprawne określenie kolejności występowania w tekście jednego zagadnienia, odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2408-nA1-4":{max:1,answer:["Litera oznaczająca wybrany wniosek: A"],levels:[{points:1,alts:["wybranie wniosku A i poprawne wyjaśnienie, na czym polega zafałszowanie informacji."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2408-nA1-15-1":{max:1,answer:["Lalka"],levels:[{points:1,alts:["poprawna odpowiedź."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2506-nA1-4":{max:2,levels:[{points:2,alts:["dwie poprawne odpowiedzi."]},{points:1,alts:["jedna poprawna odpowiedź."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi. cej arkuszy znajdziesz na stronie: arkusze.pl ę Wi Rozwiązanie CD"]}]},"MPOP-P1-P2-2506-nA1-10-1":{max:1,answer:["pozytywizm"],levels:[{points:1,alts:["poprawne podanie nazwy epoki literackiej."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2506-nA1-15-2":{max:1,levels:[{points:1,alts:["poprawne wypisanie z przytoczonego fragmentu Podróży z Herodotem dwóch sformułowań o charakterze wartościującym, wyrażających autoocenę."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi. cej arkuszy znajdziesz na stronie: arkusze.pl ę Wi Przykładowe odpowiedzi • spotkanie fascynujące • wielką lekcją pokory • konieczność wielkiej pracy nad sobą • wróciłem z tej podróży zawstydzony swoją niewiedzą/nieoczytaniem/ignorancją • były"]}]},"MPOP-P1-P2-2508-nA1-8-2":{max:1,answer:["• Polko • Czy wzrok twój... • Czy wzrok twój ognia pełen, nim zgasnął w mogile, / Tam wiecznie lecąc jasne powypalał ślady?"],levels:[{points:1,alts:["poprawne wypisanie przykładu apostrofy z fragmentu Grobu Potockiej."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2606-nA1-4":{max:1,answer:["W akapicie 5. przedstawiono przyczynę (przyczynę / skutek) niskiej aktywności sportowej Polaków według deklaracji większości z nich. Słowa Włodzimierza Kocemby zacytowane w tym akapicie podważają (podważają / potwierdzają) wiarygodność deklaracji Polaków, o której mowa w zdaniu poprzedzającym cytat."],levels:[{points:1,alts:["poprawne uzupełnienie luki w każdym ze zdań."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2606-nA1-10":{max:1,answer:["Bohater, który wypowiada się w przytoczonym fragmencie Romantyczności Adama Mickiewicza, reprezentuje światopogląd typowy dla (oświecenia / romantyzmu) oświecenia, będący wyrazem przekonania o wartości (zmysłowego/ pozazmysłowego) zmysłowego poznania świata."],levels:[{points:1,alts:["poprawne uzupełnienie dwóch luk w zdaniu."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2606-nA1-15":{max:2,levels:[{points:2,alts:["trafne wyjaśnienie, jak zmieniły się poglądy duchownego w odniesieniu do fragmentu Dżumy ORAZ do całej powieści."]},{points:1,alts:["przedstawienie zmienionych poglądów duchownego w odniesieniu do fragmentu Dżumy ALBO przedstawienie poglądów duchownego przed doświadczeniem cierpienia dziecka w odniesieniu do całej powieści."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi. cej arkuszy znajdziesz na stronie: arkusze.pl ę Przykładowa odpowiedź oceniona na 2 pkt Wi W pierwszym kazaniu ojciec Paneloux traktuje dżumę jako karę za grzechy i wyraz gniewu Bożego w stosunku do mieszkańców Oranu, z którymi się nie utożsamia, tylko któ"]}]},"MPOP-P1-P2-2608-nA1-3":{max:1,levels:[{points:1,alts:["poprawne wyjaśnienie, jak przejawia się funkcja impresywna w ostatnim zdaniu tekstu 1., uwzględniające środek językowy potwierdzający tę funkcję."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi. cej arkuszy znajdziesz na stronie: arkusze.pl ę Wi Przykładowe odpowiedzi • Zastosowanie czasownika w trybie rozkazującym ma zachęcić odbiorcę do pozytywnej reakcji na tworzenie inteligentnych budynków. • Użycie czasownika w pierwszej osobie l"]}]},"MPOP-P1-P2-2608-nA1-4":{max:1,answer:["Akapit 2. tekstu Bartosza Słupczewskiego został rozpoczęty (spójnikiem / przysłówkiem) spójnikiem jednakże, co sygnalizuje, że w tym akapicie (wprowadzono inny aspekt zagadnienia / wzmocniono przedstawioną wcześniej argumentację) wprowadzono inny aspekt zagadnienia."],levels:[{points:1,alts:["poprawne uzupełnienie dwóch luk w zdaniu."]},{points:0,alts:["odpowiedź niepoprawna lub niepełna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2608-nA1-11-1":{max:1,answer:["Tytuł utworu: Lalka Nazwa epoki literackiej: pozytywizm"],levels:[{points:1,alts:["poprawne podanie tytułu utworu i nazwy epoki literackiej."]},{points:0,alts:["odpowiedź niespełniająca wymagań na 1 pkt albo brak odpowiedzi."]}]},"MPOP-P1-P2-2608-nA1-14":{max:1,answer:["Nagromadzenie w zacytowanym fragmencie wiersza Krzysztofa Kamila Baczyńskiego porównań oraz (epitetów / antytez) epitetów buduje w utworze nastrój grozy. Zastosowane we fragmencie utworu obrazowanie poetyckie jest nawiązaniem do („Księgi Hioba” / „Apokalipsy św. Jana”) „Apokalipsy św. Jana”, o czym świadczy wizyjny sposób opisu sytuacji lirycznej w wierszu."],levels:[{points:1,alts:["poprawne uzupełnienie luki w każdym ze zdań."]},{points:0,alts:["odpowiedź niespełniająca wymagań na 1 pkt albo brak odpowiedzi."]}]},"ZBIOR-MMAP-P0-n1":{max:2,solution:`Oznaczmy trzy kolejne liczby jako n − 1, n, n + 1, gdzie n ∈ Z.
Wówczas ich suma to
(n − 1) + n + (n + 1) = 3n
Ponieważ n jest liczbą całkowitą, to liczba 3n jest podzielna przez 3.`,levels:[{points:2,alts:["przeprowadzenie pełnego dowodu."]},{points:1,alts:["zapisanie sumy trzech kolejnych liczba jako 3n lub 3(n + 1)."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"ZBIOR-MMAP-R0-n4":{max:2,solution:`Rozpatrujemy liczby postaci
a = 11111⏟ ...111
n
Załóżmy, że n nie jest liczbą pierwszą. Istnieją wtedy takie liczby naturalne k, l, że
n = k · l.
Niech b oznacza liczbę całkowitą zapisaną za pomocą k jedynek. Oznacza to, że
k−1 k−2
b = 10 + 10 +...+10^2 + 10 + 1.
W zapisie liczby a widzimy l grup, każda złożona jest z k jedynek.
a = 11⏟ ...111⏟ ...1...11⏟ ...1
⏟ k k k
l
a = bb⏟ ...b
l
Zatem
k 2k k(l−1) k 2k k(l−1)
a = b + 10 · b + 10 · b + ...+ 10 · b = b(1 + 10 + 10 + ...+ 10 )
Oznacza to, że liczba a ma co najmniej dwa naturalne dzielniki większe od 1, zatem jest
złożona. Dochodzimy więc do sprzeczności, co pokazuje, że niemożliwa jest sytuacja, gdy
liczba pierwsza a posiada w swoim zapisie n jedynek i n nie jest liczbą pierwszą.
Zbiór zadań z matematyki. Zasady oceniania
Komentarz
Zauważmy, że z tego, że n jest liczbą pierwszą, wcale nie musi wynikać, że a będzie
pierwsza.
Liczba 11 111 = 41 · 271 została zapisana za pomocą pięciu jedynek, a jest, jak widać,
liczbą złożoną. Podobnie 1 111 111 = 239 · 4 649.`,levels:[{points:2,alts:["uzasadnienie, że jeśli liczba a jest liczbą pierwszą, to n jest liczbą pierwszą."]},{points:1,alts:["zapisanie założenia, że n nie jest liczbą pierwszą oraz n = k · l."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"ZBIOR-MMAP-R0-n12":{max:2,solution:`Musimy wykazać prawdziwość dwóch nierówności. Zaczynając od lewej strony, mamy
2(√n + 2 − √n + 1) = (2(√n+2−√n+1)⋅(√n+2+√n+1))/((√n+2+√n+1)) =
= (2[(n+2)−(n+1)])/((√n+2+√n+1)) = 2/((√n+2+√n+1))
Zastępując w mianowniku wyrażenie √n + 2 przez √n + 1, zwiększymy cały ułamek,
zatem
2/((√n+2+√n+1)) < 2/((√n+1+√n+1)) = 2/(2√n+1) = 1/(√n+1)
Postępując w analogiczny sposób z prawą nierównością, będziemy mieli
2(√n + 1 − √n) = (2(√n+1−√n)⋅(√n+1+√n))/((√n+1+√n)) = (2[(n+1)−n])/(√n+1+√n) = 2/(√n+1+√n)
Jeśli zwiększymy mianownik, zastępując √n wyrażeniem √n + 1, wartość całego ułamka
będzie mniejsza:
2/(√n+1+√n) > 2/(√n+1+√n+1) = 2/(2√n+1) = 1/(√n+1)`,levels:[{points:2,alts:["przeprowadzenie rozumowania prowadzącego do uzasadnienia dwóch nierówności."]},{points:1,alts:["przeprowadzenie rozumowania prowadzącego do uzasadnienia jednej z nierówności."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"ZBIOR-MMAP-R0-n27":{max:6,solution:`Oznaczmy przez x długość jednego z boków trójkąta. Wówczas pozostałe boki mają
długość 2x oraz 3R − 3x.
Korzystając ze wzoru na pole trójkąta P = (abc)/(4R) , otrzymujemy
P(x) = (x⋅2x⋅(3R−3x))/(4R)
Zbiór zadań z matematyki. Zasady oceniania
a po uporządkowaniu
3 3
P(x) = x^2 − x^3
2 2R
Wyznaczamy dziedzinę funkcji. Z nierówności trójkąta mamy:
x < 2x + (3R − 3x) 2x < x + (3R − 3x) 3R − 3x < x + 2x
x < 3/2 R x < 3/4 R x > 1/2 R
Dziedziną funkcji P jest zbiór (^1 R,^3 R).
2 4
Szukamy maksimum funkcji P. W tym celu wyznaczamy pochodną:
3 3 9
′
P (x) = ⋅ 2x − ⋅ 3x^2 = 3x − x^2
2 2R 2R
Obliczamy miejsca zerowe funkcji pochodnej:
′
P (x) = 0
9
3x − x^2 = 0
2R
x = 0 ∉ ( 1/2 R, 3/4 R) lub x = 2/3 R ∈ ( 1/2 R, 3/4 R)
Badamy znak funkcji pochodnej:
9
3x − x^2 > 0
2R
3x(1 − 3/(2R) x) > 0
Pochodna funkcji P jest dodatnia w przedziale (^1 R,^2 R), czyli funkcja jest rosnąca
2 3 (P)/2
w przedziale (^1 R,^2 R]. Pochodna funkcji P jest ujemna w przedziale ( R,^3 R), czyli
2 3 3
funkcja P jest malejąca w przedziale [^2 R,^3 R). To oznacza, że w punkcie (4/(x0=) 2)/3 R
3 4
funkcja osiąga wartość największą.
Obliczamy wartość funkcji P dla x0 =^2 R:
3
2 3
3 2 3 2 4 2
(2/(P())/3 R) = ⋅ ( R) − (2/(⋅())/3 R) = R^2 − R^2 = R^2
2 3 2R 3 9 9
Materiał dodatkowy dla nauczycieli i uczniów szkół ponadpodstawowych`,levels:[{points:6,alts:["obliczenie największej wartości pola trójkąta: P( R) = R^2 . 3 9"]},{points:5,alts:["zbadanie przebiegu zmienności funkcji i wyznaczenie argumentu x0, dla którego funkcja pola osiąga wartość największą: x0 =^2 R. 3"]},{points:4,alts:["obliczenie miejsca zerowego funkcji pochodnej: x =^2 R. 3 9 ′"]},{points:3,alts:["wyznaczenie pochodnej funkcji pola: P (x) = 3x − x^2 . 2R"]},{points:2,alts:["wyznaczenie dziedziny funkcji P: DP = (^1 R,^3 R). 2 4"]},{points:1,alts:["wyznaczenie funkcji pola w zależności od długości jednego boku: 3 3 P(x) = x^2 − x^3 . 2 2R"]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-P0-n7":{max:2,solution:`Korzystając z własności działań na potęgach, otrzymujemy
3^45 + 9^22 + 27^14 = 3^45 + (3^2 )^22 + (3^314 ) = 3^45 + 3^44 + 3^42
Wyłączamy wspólny czynnik przed nawias
3^45 + 3^44 + 3^42 = 3^42 (3^3 + 3^2 + 1) = 3^42 ⋅ 37
Liczba 3^42 jest liczbą całkowitą, zatem liczba 3^45 + 9^22 + 27^14 jest podzielna przez 37.
20 Informator o egzaminie maturalnym z matematyki na poziomie podstawowym od roku szkolnego 2024/2025`,levels:[{points:2,alts:["przekształcenie wyrażenia 3^45 + 9^22 + 27^14 do postaci 3^42 ⋅ 37."]},{points:1,alts:["przekształcenie wyrażenia 3^45 + 9^22 + 27^14 do postaci 3^45 + 3^44 + 3^42 ."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-P0-n27-1":{max:1,solution:`[−5,−1) ∪ (7,8]
Przykładowe zadania z rozwiązaniami 45`,levels:[{points:1,alts:["rozwiązanie poprawne."]},{points:0,alts:["rozwiązanie niepoprawne lub niepełne albo brak rozwiązania."]}]},"INF-MMAP-P0-n27-3":{max:2,levels:[{points:2,alts:["poprawnie uzupełnione dwie luki."]},{points:1,alts:["poprawnie uzupełniona jedna luka."]},{points:0,alts:["brak spełnienia powyższych kryteriów. Pełne rozwiązanie 6 1. Największa wartość funkcji f jest równa ......... . 0 2. Najmniejsza wartość funkcji f w przedziale [6,8] jest równa ......... ."]}]},"INF-MMAP-P0-n28":{max:4,levels:[{points:4,alts:["poprawnie uzupełnione cztery luki."]},{points:3,alts:["poprawnie uzupełnione trzy luki."]},{points:2,alts:["poprawnie uzupełnione dwie luki."]},{points:1,alts:["poprawnie uzupełniona jedna luka."]},{points:0,alts:["brak spełnienia powyższych kryteriów. Pełne rozwiązanie [−8,6) 1. Dziedziną funkcji f jest przedział ............... . [−4,4] 2. Zbiorem wartości funkcji f jest przedział ............... . 3. Zbiorem wszystkich argumentów, dla których funkcja f przyjmuje wartości [−4,6) nieujemne, jest przedział ..."]}]},"INF-MMAP-P0-n48":{max:2,solution:`Sposób 1.
Zauważmy, że:
• trójkąt ACB jest równoramienny, gdzie: |AC| = |CB| (na mocy twierdzenia
o odcinkach stycznych).
• trójkąt ASD jest równoramienny, gdzie: |SD| = |SA| (odcinki SD i SA są
promieniami okręgu).
• |∡SAC| = 90° (promień poprowadzony do punktu styczności jest prostopadły do
stycznej)
• |∡BAD| = 90° (kąt BAD jest kątem wpisanym w okrąg, opartym na średnicy BD).
Oznaczmy: |∡BAC| = β.
Wtedy |∡SAB| = |∡SAC| − |∡BAC| = 90° − β.
Stąd |∡SAD| = |∡BAD| − |∡SAB| = 90° − (90° − β) = β.
Ponieważ trójkąty ACB oraz ASD są równoramienne, stąd wynika, że:
|∡CBA| = |∡BAC| = β oraz |∡ACB| = 180° − 2β
l
|∡SDA| = |∡DAS| = β oraz |∡ASD| = 180° − 2β
B
β
Trójkąty ACB i są podobne na
(ASD)/(kąt–kąt–kąt) 180° − 2β
podstawie cechy
S
podobieństwa trójkątów.
180° − 2β
β
D
β β
k A C
96 Informator o egzaminie maturalnym z matematyki na poziomie podstawowym od roku szkolnego 2024/2025
Sposób 2.
Zauważmy, że:
• trójkąt ACB jest równoramienny, gdzie: |AC| = |CB| (na mocy twierdzenia
o odcinkach stycznych).
• trójkąt ASD jest równoramienny, gdzie: |SD| = |SA| (odcinki SD i SA są
promieniami okręgu).
• trójkąt ASB jest równoramienny, gdzie: |SA| = |SB| (odcinki SA i SB są
promieniami okręgu).
• |∡SAC| = 90° (promień poprowadzony do punktu styczności jest prostopadły do
stycznej)
Oznaczmy: |∡BAC| = β.
Ponieważ trójkąt ACB jest równoramienny, więc
|∡CBA| = |∡BAC| = β oraz |∡ACB| = 180° − 2β
Wtedy |∡SAB| = |∡SAC| − |∡BAC| = 90° − β.
Ponieważ trójkąt ASB jest równoramienny, więc |∡SBA| = 90° − β`,levels:[{points:2,alts:["poprawne przeprowadzenie pełnego dowodu podobieństwa trójkątów ACB i ASD."]},{points:1,alts:["zapisanie, że trójkąty ACB i ASD są równoramienne oraz wskazanie / zapisanie równości odpowiednich ramion."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-P0-n65-4":{max:2,solution:`Obliczymy, ile jest łącznie takich osób w firmie F, które zarabiają miesięcznie 5,5 tys. zł lub
mniej:
1 + 1 + 4 + 7 + 10 + 14 + 13 + 9 + 6 = 65
Określimy, jaki procent wszystkich osób w firmie stanowią łącznie osoby zarabiające
miesięcznie 5,5 tys. zł lub mniej:
65/75 = 0,8(6) ≈ 87%
Osoby zarabiające 5,5 tys. zł lub mniej stanowią 87% wszystkich pracowników firmy F.
Przykładowe zadania z rozwiązaniami 137`,levels:[{points:2,alts:["poprawna metoda obliczenia jaki % wszystkich pracowników firmy F stanowią osoby zarabiające 5,5 tys. zł lub mniej oraz podanie wyniku 87%."]},{points:1,alts:["obliczenie liczby wszystkich pracowników firmy F zarabiających 5,5 tys. zł lub mniej."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n3":{max:3,solution:`1
Przekształcamy wielomian W do postaci W(x) = (x^3 − 16x^2 + 67x − 24).
8
Stosujemy do wielomianu x^3 − 16x^2 + 67x − 24 twierdzenie o pierwiastkach całkowitych
wielomianu o współczynnikach całkowitych.
Na mocy tego twierdzenia wnosimy, że jeśli wielomian W ma pierwiastek całkowity, to
należy on do zbioru {±1,±2,±3,±4,±6,±8,±12,±24}.
Ponieważ dla x ≤ 0 mamy x^3 − 16x^2 + 67x − 24 < 0, więc wielomian W nie ma
pierwiastków ujemnych. Na podstawie fragmentu wykresu funkcji W stwierdzamy, że jeden
z pierwiastków całkowitych wielomianu może znajdować się w przedziale (7,+∞).
Zatem pierwiastki całkowite wielomianu W mogą być jedynie wśród liczb 8, 12 oraz 24.
Sprawdzamy, czy liczba 8 jest pierwiastkiem wielomianu W:
1
W(8) = ⋅ (8^3 − 16 ⋅ 8^2 + 67 ⋅ 8 − 24) = 0
8
Zatem wielomian W jest podzielny przez dwumian (x − 8).
Dzielimy wielomian W przez dwumian (x − 8) i zapisujemy wielomian W w postaci
iloczynu:
1
W(x) = ⋅ (x − 8)(x^2 − 8x + 3)
8
Pierwiastkami trójmianu x^2 − 8x + 3 są liczby: 4 − √13 oraz 4 + √13.
Pierwiastkami wielomianu W są liczby: 4 − √13, 4 + √13 oraz 8.
20 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025`,levels:[{points:3,alts:["obliczenie wszystkich pierwiastków wielomianu W."]},{points:2,alts:["sprawdzenie, że liczba 8 jest pierwiastkiem wielomianu W oraz podzielenie wielomianu W przez dwumian (x − 8)."]},{points:1,alts:["zastosowanie twierdzenia o pierwiastkach całkowitych do wielomianu x^3 − 16x^2 + 67x − 24 i określenie liczb całkowitych mogących być pierwiastkami wielomianu W."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n10":{max:6,solution:`Rozpatrzmy sieć dróg złożoną z odcinków AK, KL, LC, BL i DK (zobacz rysunek 1.).
Rysunek 1.
D C
L
K
A B
Prowadzimy prostą p równoległą do AD i przechodzącą przez K i zaznaczamy na niej
punkt K’ taki, że |AK′| = |DK′|.
Prowadzimy prostą równoległą do BC i przechodzącą przez L i zaznaczamy na niej
punkt L’ taki, że |BL′| = |CL′| (zobacz rysunek 2.).
Rysunek 2.
D C
p
L
K′
L′
K
A B
36 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025
Pokażemy, że sieć dróg z węzłami K i L można zastąpić siecią krótszą – z węzłami K’
oraz L’.
Niech D’ będzie punktem symetrycznym do punktu D względem prostej p. Wówczas
punkty D’, K’ oraz A są współliniowe, więc
′
|DK| + |KA| = |D K| + |KA| ≥ |D′A| = |DK′| + |K′A|
Podobnie pokazujemy, że |BL| + |LC| ≥ |BL′| + |L′C|. Ponadto odcinek K′L′ jest
równoległy do prostej AB, więc |K′L′| ≤ |KL|. Zatem sieć dróg z węzłami K′ i L′ jest
krótsza niż z węzłami K i L.
Oznaczmy odległość punktu K′ od prostej AD przez x, natomiast punktu L′ od
prostej BC – przez y. Długość d sieci z węzłami K′ i L′ jest równa
d = 2√150^2 + x^2 + 2√150^2 + y^2 + 300 − x − y
gdzie x ∈ [0,300), y ∈ [0,300) i x + y < 300.
Zbadamy funkcję f(x) = 2√150^2 + x^2 − x określoną dla x ∈ [0,300).
1 1 2x
′
f (x) = 2 ⋅ ⋅ ⋅ 2x − 1 = − 1
2
√150^2 + x^2 √150^2 + x^2
′
f (x) = 0
= 1
((2x)/2)/(√(150)
+ x^2 )
4x^2 = x^2 + 150^2
x = 50√3
′
f (x) > 0 ⟺ x ∈ (50√3,300)
′
f (x) < 0 ⟺ x ∈ [0,50√3)
Funkcja f jest malejąca w przedziale [0,50√3] i rosnąca w prze`,levels:[{points:6,alts:["obliczenie długości najkrótszej sieci z dwoma węzłami i podanie lokalizacji węzłów względem miast."]},{points:5,alts:["obliczenie długości najkrótszej sieci z dwoma węzłami."]},{points:4,alts:["obliczenie wartości najmniejszej funkcji f."]},{points:3,alts:["wyznaczenie pochodnej funkcji f."]},{points:2,alts:["zapisanie długości sieci w zależności od odległości węzłów od prostych – odpowiednio – AD i BC."]},{points:1,alts:["uzasadnienie, że węzły muszą się znajdować na symetralnej odcinka AD."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n14":{max:3,solution:`Funkcja f jest funkcją ciągłą w zbiorze liczb rzeczywistych, ponieważ jest funkcją
wielomianową.
Ponieważ f(0) = 1 oraz f(2) = 64 − 32 − 8 + 1 = 25 i funkcja jest ciągła na
przedziale (0,2), więc, na mocy twierdzenia Darboux, przyjmuje w przedziale (0,2)
wszystkie wartości pośrednie pomiędzy f(0) a f(2). Wobec tego istnieje taki argument
x ∈ (0,2), dla którego zachodzi f(x) = 5. To oznacza, że liczba 5 należy do zbioru
wartości funkcji.`,levels:[{points:3,alts:["przeprowadzenie pełnego dowodu."]},{points:2,alts:["uzasadnienie, że funkcja f jest funkcją ciągłą, wskazanie argumentu, dla którego wartość funkcji jest mniejsza od 5 wraz z obliczeniem wartości funkcji dla tego argumentu i wskazanie argumentu, dla którego wartość funkcji jest większa od 5 wraz z obliczeniem wartości funkcji dla tego argumentu."]},{points:1,alts:["uzasadnienie, że funkcja f jest funkcją ciągłą, wskazanie argumentu, dla którego wartość funkcji jest mniejsza od 5 i obliczenie wartości funkcji dla tego argumentu","uzasadnienie, że funkcja f jest funkcją ciągłą, wskazanie argumentu, dla którego wartość funkcji jest większa od 5 i obliczenie wartości funkcji dla tego argumentu","wskazanie argumentu, dla którego wartość funkcji jest mniejsza od 5 wraz z obliczeniem wartości funkcji dla tego argumentu i wskazanie argumentu, dla którego wartość funkcji jest większa od 5 wraz z obliczeniem wartości funkcji dla tego argumentu."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n19":{max:4,solution:`Sposób 1.
Niech d1 będzie odległością (w km) zastępu „Tropiciele” od miejscowości A.
Wyznaczamy zależność d1 od czasu t (w godzinach), jaki upłynął od chwili wyruszenia
zastępu z miejscowości A:
d (t) = 4t dla t ∈ [0,5].
1
Niech d2 będzie odległością (w km) zastępu „Korsarze” od miejscowości A.
Wyznaczamy zależność d2 od czasu t (w godzinach), jaki upłynął od chwili wyruszenia
zastępu z miejscowości B:
15
d (t) = 15 − 2t dla t ∈ [0, ].
2
2
Odległość między zastępami badamy do momentu, gdy pierwszy z nich dotrze do celu.
Odległość d między zastępami w chwili t jest równa
d(t) = √d^2 (t) + d^2 (t) = √16t^2 + (15 − 2t)^2 dla t ∈ [0,5].
1 2
Badamy, dla jakiego argumentu t ∈ [0,5] funkcja d osiąga wartość najmniejszą.
Ponieważ funkcja g(x) = √x jest funkcją rosnącą w przedziale [0,+∞), więc funkcja d
osiąga wartość najmniejszą dla takiego argumentu, dla którego funkcja f określona wzorem
f(t) = 16t^2 + (15 − 2t)^2 = 20t^2 − 60t + 225 dla t ∈ [0,5]
osiąga wartość najmniejszą.
Korzystamy z własności funkcji kwadratowej i obliczamy argument, dla którego funkcja f
osiąga wartość najmniejszą:
t = 60/(2⋅20) = 1,5 ∈ [0,5]
60 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025
więc funkcja f osiąga wartość najmniejszą dla t = 1,5. Zatem funkcja d osiąga wartość
najmniejszą dla argumentu t = 1,5.
Odległość między zastępami harcerzy będzie najmniejsza o godzinie 10:30.
Sposób 2.
Niech d1 będzie odległością (w km) zastępu „Tropiciele” od miejsc`,levels:[{points:4,alts:["poprawna metoda wyznaczenia chwili, w której odległość między zastępami będzie najmniejsza i poprawna odpowiedź."]},{points:3,alts:["uzasadnienie, że odległość d jest najmniejsza wtedy, gdy wyrażenie podpierwiastkowe 20t^2 − 60t + 225 jest możliwie najmniejsze oraz podanie zakresu zmienności t."]},{points:2,alts:["wyznaczenie odległości d między zastępami w zależności od czasu t, jaki upłynął od momentu wyruszenia zastępów."]}]},"INF-MMAP-R0-n21":{max:5,solution:`Sposób 1.
Przyjmijmy oznaczenia jak na rysunku 1.
E
Rysunek 1.
b
S
D
α C
O
A a
B
Przykładowe zadania z rozwiązaniami 69
Wyznaczamy b w zależności od a.
Z treści zadania mamy (4a)/(4a+4b) = 1/5 , co daje b = 4a.
Wyznaczamy |OS| w zależności od a.
E
Trójkąt OBE jest prostokątny, punkt S jest środkiem Rysunek 2.
przeciwprostokątnej, więc S jest środkiem okręgu
opisanego na trójkącie OBE (zobacz rysunek 2.).
2a
Zatem |OS| = 2a.
Obliczamy stosunek pola przekroju ACS do pola podstawy
ostrosłupa:
S
P 1/2 ⋅ a√2 ⋅ |OS| 1/2 ⋅ a√2 ⋅ 2a
ACS
= = = √2 α
PABCD a^2 a^2 2a
O B
Do trójkąta BSO stosujemy twierdzenie cosinusów w celu obliczenia cosinusa kąta BSO:
2
((a√2)/(())/2 ) = (2a)^2 + (2a)^2 − 2 ⋅ 2a ⋅ 2a ⋅ cosα
Z ostatniego równania otrzymujemy cosα = 15/16 , więc α ≈ 20°.
Sposób 2.
Przyjmijmy oznaczenia jak na rysunku 1.
Wyznaczamy b w zależności od a.
Z treści zadania mamy (4a)/(4a+4b) = 1/5 , co daje b = 4a.
Stąd i z twierdzenia cosinusów zastosowanego do trójkąta BEC obliczamy cosinus
kąta BEC:
a^2 = b^2 + b^2 − 2 ⋅ b ⋅ b ⋅ cos|∡BEC|
a^2 = 16a^2 + 16a^2 − 2 ⋅ 4a ⋅ 4a ⋅ cos|∡BEC|
cos|∡BEC| = 31/32
70 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025
Korzystamy z twierdzenia cosinusów zastosowanego do trójkąta CSE i wyznaczamy
długość odcinka SC:
2
1
|SC|^2 = b (2 1/(+())/2 b) − 2 ⋅ b ⋅ b ⋅ cos|∡BEC|
2
31
|SC|^2 = 16a^2 + 4a^2 − 16a^2 ⋅
32
9
|SC|^2 = a^2
2
|SC| = (3a)/√2
Stosujemy twierdzenie Pitagorasa do trójkąta OCS w celu wyznaczeni`,levels:[{points:5,alts:["obliczenie miary kąta BSO (w zaokrągleniu do 1°) oraz obliczenie stosunku pola przekroju do pola podstawy ostrosłupa.","obliczenie miary kąta BSO (w zaokrągleniu do 1°) oraz obliczenie stosunku pola przekroju do pola podstawy ostrosłupa."]},{points:4,alts:["obliczenie wartości cosinusa kąta BSO oraz stosunku pola przekroju do pola podstawy ostrosłupa","wyznaczenie miary kąta BSO.","obliczenie cosinusa kąta OEB lub FBS."]},{points:3,alts:["obliczenie stosunku pola przekroju do pola podstawy ostrosłupa","obliczenie wartości cosinusa kąta BSO.","obliczenie stosunku pola przekroju do pola podstawy ostrosłupa."]},{points:2,alts:["wyznaczenie długości odcinka OS w zależności od długości krawędzi podstawy.","wyznaczenie długości odcinków SF i OF."]},{points:1,alts:["wyznaczenie długości krawędzi bocznej w zależności od długości krawędzi podstawy.","wyznaczenie długości krawędzi bocznej w zależności od długości krawędzi podstawy."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania. dla rozwiązania sposobem 3.","rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n26":{max:5,solution:`Sposób 1.
Wykażemy, że trójkąty BPS i BSC są podobne.
Punkt S jest równooddalony od boków AB i BC trapezu jako środek okręgu wpisanego
w trapez, więc leży na dwusiecznej kąta ABC. Zatem |∡PBS| = |∡SBC|.
Podobna argumentacja prowadzi do stwierdzenia, że |∡BCS| = |∡SCD|.
Oznaczmy miary kątów PBS oraz BCS jako – odpowiednio – α oraz β (rysunek 1.).
D C
β
β
Rysunek 1.
S
α
α
A P B
88 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025
Ponieważ suma miar kątów przy ramieniu trapezu wynosi 180°, więc 2α + 2β = 180°,
czyli α + β = 90°. Dlatego:
|∡BSC| = 180° − (α + β) = 90°
oraz
|∡PSB| = 180° − (90° + α) = β
To oznacza, że ΔBPS ~ ΔBSC (na podstawie cechy kkk podobieństwa trójkątów).
Obliczymy skalę podobieństwa trójkątów BPS oraz BSC.
Niech E i F oznaczają punkty styczności okręgu i odcinków – odpowiednio – BC
oraz CD (rysunek 2.).
D F C
E Rysunek 2.
2
5
S
A P B
Ponieważ |∡SBE| = |∡CSE| oraz |∡ESB| = |∡ECS|, więc trójkąty prostokątne SBE
i CSE są podobne (na podstawie cechy kkk podobieństwa trójkątów). Zatem
(|SE|)/(|BE|) = (|CE|)/(|SE|)
i dalej
|SE|^2 = |BE| ⋅ |CE|
4 = (5 − |CE|) ⋅ |CE|
|CE|^2 − 5 ⋅ |CE| + 4 = 0
|CE| = 1 lub |CE| = 4
Z twierdzenia o odcinkach stycznych mamy |PB| = |BE| oraz |CE| = |CF|.
Ponieważ |CD| < |AB|, więc |CE| < |EB| i w konsekwencji |CE| = 1 oraz |BE| = 4.
Po zastosowaniu twierdzenia Pitagorasa do trójkąta BSE otrzymujemy |BS| = 2√5.
Obliczamy skalę podobieństwa trójkątów BSC i BPS:
5
k = (|BC|)/(|BS|) = = √5/`,levels:[{points:5,alts:["obliczenie skali podobieństwa trójkątów BPS oraz BSC."]},{points:4,alts:["obliczenie długości odcinka stycznej (zawierającej odcinek BC) od punktu B do punktu styczności z okręgiem","stwierdzenie, że każdy z obliczonych stosunków odpowiednich boków trójkątów BPS i BSC jest skalą podobieństwa."]},{points:3,alts:["uzasadnienie, że trójkąty BPS i BSC są podobne."]},{points:2,alts:["uzasadnienie, że kąt BSC jest kątem prostym","obliczenie długości boków trójkątów BSC oraz BPS","obliczenie długości boków trójkąta BPS i uzasadnienie równości miar kątów PBS oraz SBC (lub: BCS oraz SCD)."]},{points:1,alts:["uzasadnienie równości miar kątów PBS oraz SBC (lub: BCS oraz SCD)","obliczenie długości boków trójkąta BPS."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n27":{max:4,solution:`Niech l będzie długością tworzącej stożka, a R – długością promienia podstawy stożka.
Rozwiniemy powierzchnię boczną stożka, na której zaznaczymy kluczowe punkty P, B i S.
Długość odcinka PB oznaczymy jako d. Jest to długość najkrótszej trasy z punktu P do
bazy (zobacz rys. 1.).
Rysunek 1.
S B
d
P
Powierzchnia boczna stożka po rozwinięciu jest wycinkiem koła o promieniu długości l.
Wyznaczymy miarę β kąta środkowego tego wycinka.
Ze wzorów na pole powierzchni bocznej stożka oraz pole wycinka koła otrzymujemy
β
π ⋅ R ⋅ l = ⋅ π ⋅ l^2
2π
β = 2π ⋅ (R)/(l)
Zatem
|∡BSP| = 1/2 β = π ⋅ (R)/(l)
Kąt rozwarcia stożka jest równy α, więc (R)/(l) = sin (α)/2 , co prowadzi do
|∡BSP| = π ⋅ sin (α)/2
Wyrazimy długości odcinków BS oraz PS w zależności od danych podanych w treści
zadania.
Rozważmy przekrój osiowy stożka zawierający punkty B, P oraz S (zobacz rys. 2.). Punkt
S′ na rysunku 2. jest rzutem prostokątnym punktu S na podstawę stożka, natomiast punkt
Q – punktem przecięcia tworzącej SB z podstawą stożka.
Przykładowe zadania z rozwiązaniami 95
Rys. 2.
S
α
2
T B
P S' Q
Z trójkątów SS′Q oraz STB otrzymujemy
′
|BS| = oraz
(((|ST|)/(α))/cos)/2 ((|SQ|= (|SS|)/(α))/cos)/2
′
Z treści zadania |ST| = H − H oraz |SS | = H − H , więc
2 1 2 0
oraz
(|PS|=|SQ|= (H2−H0)/(α))/cos
((|BS|= (H2−H1)/(α))/cos)/2
2
Stosujemy twierdzenie cosinusów do trójkąta BSP i obliczamy |PB|:
|PB|^2 = |PS|^2 + |BS|^2 − 2 ⋅ |PS| ⋅ |BS| ⋅ cos|∡BSP|
2 2
H − H H − H 2(H − H )(H − H ) α
2 0 2 1 2 0 1
d = √( ) + ( ) − 2/2 ⋅ co`,levels:[{points:4,alts:["zastosowanie poprawnej metody i poprawny wynik."]},{points:3,alts:["obliczenie miary łukowej kąta BSP na siatce stożka i obliczenie długości odcinków BS oraz PS."]},{points:2,alts:["obliczenie miary łukowej kąta BSP na siatce stożka","obliczenie długości odcinków BS oraz PS."]},{points:1,alts:["zapisanie, że najkrótsza droga jest równa długości odcinka PB na siatce stożka."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania. 94 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025"]}]},"INF-MMAP-R0-n28":{max:4,solution:`Wyznaczamy liczbę wszystkich trójelementowych podzbiorów zbioru M:
( (3n+1)/3 ) = ((3n+1)⋅3n⋅(3n−1))/6 = ((3n+1)n(3n−1))/2
Wyznaczamy moc zbioru A.
Zauważmy, że suma trzech liczb naturalnych daje przy dzieleniu przez 3 resztę 1, gdy:
1) dwie z tych liczb są podzielne przez 3, a jedna z tych liczb daje przy dzieleniu przez 3
resztę 1
LUB
2) dwie z tych liczb dają przy dzieleniu przez 3 resztę 1, a jedna z tych liczb daje przy
dzieleniu przez 3 resztę 2,
LUB
98 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025
3) dwie z tych liczb dają przy dzieleniu przez 3 resztę 2, a jedna z tych liczb jest
podzielna przez 3.
Ponieważ w zbiorze M mamy:
• dokładnie n liczb podzielnych przez 3
• dokładnie n + 1 liczb, które przy dzieleniu przez 3 dają resztę 1
• dokładnie n liczb, które przy dzieleniu przez 3 dają resztę 2,
więc
|A| = ( (n)/2 ) ⋅ ( (n+1)/1 ) + ( (n+1)/2 ) ⋅ ( (n)/1 ) + ( (n)/2 ) ⋅ ( (n)/1 ) =
= (n(n−1)(n+1))/2 + ((n+1)⋅n⋅n)/2 + (n(n−1)n)/2 =
n(n^2 − 1 + n^2 − n) − 1)
= (+n+n)/2 = (n(3n)/2
Prawdopodobieństwo zdarzenia A jest równe
n(3n^2 − 1)
3n^2 − 1
P(A) = 2/((3n+1)n(3n−1)) =
(3n + 1)(3n − 1)
2`,levels:[{points:4,alts:["zastosowanie poprawnej metody i poprawny wynik."]},{points:3,alts:["rozpatrzenie wszystkich możliwych przypadków, kiedy suma trzech liczb naturalnych daje przy dzieleniu przez 3 resztę 1, tj. zapisanie, że moc zbioru A wynosi ( (n)/2 ) ⋅ ( (n+1)/1 ) + ( (n+1)/2 ) ⋅ ( (n)/1 ) + ( (n)/2 ) ⋅ ( (n)/1 )"]},{points:2,alts:["rozpatrzenie tylko dwóch z wszystkich możliwych przypadków, kiedy suma trzech liczb naturalnych daje przy dzieleniu przez 3 resztę 1 – tj. zapisanie, że moc zbioru A wynosi ( (n)/2 ) ⋅ ( (n+1)/1 ) + ( (n+1)/2 ) ⋅ ( (n)/1 ) LUB ( (n)/2 ) ⋅ ( (n+1)/1 ) + ( (n)/2 ) ⋅ ( (n)/1 ) LUB ( (n+1)/2 ) ⋅ ( (n)/1"]},{points:1,alts:["wyznaczenie liczby wszystkich trójelementowych podzbiorów zbioru M."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"INF-MMAP-R0-n30":{max:3,solution:`Przyjmijmy następujące oznaczenia:
„+” – zdarzenie polegające na tym, że wylosowana osoba z populacji poddana testowi
otrzyma wynik pozytywny,
„–” – zdarzenie polegające na tym, że wylosowana osoba z populacji poddana testowi
otrzyma wynik negatywny,
Z – zdarzenie polegające na tym, że wylosowana osoba z populacji jest zdrowa,
C – zdarzenie polegające na tym, że wylosowana osoba z populacji jest chora.
Należy obliczyć P(C|+).
Zgodnie z warunkami zadania:
P(C) = 0,002, więc P(Z) = 0,998
P(+|C) = 0,99, więc P(−|C) = 0,01
P(−|Z) = 0,98, więc P(+|Z) = 0,02.
102 Informator o egzaminie maturalnym z matematyki na poziomie rozszerzonym od roku szkolnego 2024/2025
Stosujemy twierdzenie Bayesa i obliczamy szukane prawdopodobieństwo:
P(C)
P(C|+) = P(+|C) ⋅
P(+|Z) ⋅ P(Z) + P(+|C) ⋅ P(C)
P(C|+) = 0,99 ⋅ 0,002/(0,02⋅0,998+0,99⋅0,002) = 99/1097 ≈ 0,09`,levels:[{points:3,alts:["zastosowanie poprawnej metody i poprawny wynik."]},{points:2,alts:["zastosowanie wzoru Bayesa."]},{points:1,alts:["obliczenie prawdopodobieństw warunkowych P(−|C) oraz P(+|Z)."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MJAP-P0-100-2203-n3":{max:4,levels:[{points:1,alts:["poprawna odpowiedź. Zad. Odpowiedź oczekiwana Przykłady odpowiedzi akceptowalnych problem with coach (technical) problems with (a/the) bus 3.1. problem with the coach trouble / difficulties with a coach/bus they were technical problems with bus for 30 minutes / 30 min. half hour / half (of) hour hal"]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi. Zad. Przykłady odpowiedzi niepoprawnych Uzasadnienie odpowiedź nie jest wystarczająco coach / bus precyzyjna odpowiedź nie jest wystarczająco some problems precyzyjna schedule odpowiedź niezgodna z tekstem odpowiedź nie jest wystarczająco technical problem"]}]},"MMAP-P0-100-1505-n27":{max:2,levels:[{points:2,alts:["gdy przeprowadzi pełny dowód. II sposób rozwiązania Nierówność 4x^2 −8xy+5y^2 ≥ 0 możemy potraktować jak nierówność kwadratową z niewiadomą x lub – analogicznie – z niewiadomą y. Wyróżnik trójmianu stojącego po lewej stronie nierówności jest równy Δ = (−8y)^2 −4 4⋅ ⋅(5y^2 ) = −16y^2 ≤ 0 . Stąd i z f","gdy wyznaczy wyróżnik trójmianu f ( )x = 4x^2 −8xy+5y^2 , zapisze, że jest on niedodatni i wyciągnie wniosek, że trójmian przyjmuje tylko wartości nieujemne. III sposób rozwiązania Dla dowolnych liczb rzeczywistych x, y prawdziwa jest nierówność x^2 + y^2 ≥ 2xy. Stąd wynika, że prawdziwa jest nierów","gdy przeprowadzi pełny dowód. IV sposób rozwiązania Gdy co najmniej jedna z liczb x, y jest równa 0, to nierówność 4x^2 −8xy+5y^2 ≥ 0 jest prawdziwa, gdyż suma trzech liczb, z których co najmniej dwie są równe 0, a trzecia nieujemna, jest nieujemna. Gdy liczby x, y są przeciwnych znaków, to xy < 0, ","gdy przeprowadzi pełny dowód."]},{points:1,alts:["gdy zapisze nierówność w postaci równoważnej y^2 +(2x−2y)^2 ≥ 0 i na tym poprzestanie lub dalej popełnia błędy.","gdy wyznaczy wyróżnik trójmianu f ( )x = 4x^2 −8xy+5y^2 : Δ = −16y^2 i na tym poprzestanie lub dalej popełnia błędy.","gdy zapisze, że dla dowolnych liczb rzeczywistych x, y prawdziwe są nierówności 4x^2 −8xy+5y^2 ≥ 4x^2 −8xy+4y^2 oraz 4x^2 +4y^2 ≥8xy (lub x^2 + y^2 ≥ 2xy).","gdy wykaże prawdziwość nierówności w przypadku, gdy co najmniej jedna z liczb x, y jest równa 0 oraz w przypadku, gdy liczby x, y są przeciwnych znaków, a w przypadku, gdy x, y są tego samego znaku zauważy, że prawdziwa jest nierówność (2x− 5y)^2 ≥ 0."]}]},"MMAP-P0-100-1605-n29":{max:2,solution:`I sposób
Niech ACB =α .
Ponieważ CAB =90°, więc ABC =90° −α .
W ΔCDE : DEC =90°, więc CDE =90° −α .
Trójkąt CDE jest prostokątny oraz DEC =90°, więc CDE =90° −α .

Podobnie trójkąt BFG jest prostokątny i FGB = 90 , więc BFG =α .
Ponieważ trójkąty CDE i BFG mają równe kąty, więc na podstawie cechy podobieństwa kkk są
podobne.
II sposób
Niech ACB = DCE =α i ABC = FBG = β .
Trójkąt CED jest podobny do trójkąta ABC (cecha kkk), bo ACB = DCE =α oraz
CAB = DEC =90°.
Podobnie trójkąt GBF jest podobny do trójkąta ABC, (cecha kkk), bo ABC = FBG = β
oraz CAB = FGB =90°.
Stąd trójkąt CED jest podobny do trójkąta FBG (z przechodniości relacji podobieństwa).`,levels:[{points:2,alts:["gdy przeprowadzi pełne rozumowanie."]},{points:1,alts:["wskaże w dwóch trójkątach spośród trójkątów CBA, CDE i FBG jedną parę równych kątów ostrych i na tym zakończy lub dalej popełni błędy, przy czym kąt przy wierzchołku B musi być wskazany dwukrotnie, jako kąt w obu trójkątach CBA i FBG, np. zdający zapisze FBG = CBA lub stwierdzi, że jest to wspólny","zapisze, że trójkąt CBA jest podobny do trójkąta FBG i do trójkąta CDE i stąd wywnioskuje, że trójkąt CDE jest podobny do trójkąta FBG, ale nie wskaże żadnej pary równych kątów ostrych w tych trójkątach"]}]},"MMAP-P0-100-1705-n27":{max:2,solution:`Wyłączamy wspólny czynnik przed nawias 4^2017 (1+ 4+ 4^2 + 4^3 ). Doprowadzamy liczbę do
postaci 4^2017 ⋅5 17⋅ . Wnioskujemy, że dana liczba jest podzielna przez 17 .`,levels:[{points:2,alts:["gdy przeprowadzi poprawny dowód."]},{points:1,alts:["gdy zapisze liczbę 4^2017 + 4^2018 + 4^2019 + 4^2020 w postaci iloczynu, w którym jeden z czynników jest potęgą 4^(k) , gdzie 1985≤k ≤2017, np. 4^2017 (1+ 4+ 4^2 + 4^3 ) i na tym poprzestanie lub dalej popełnia błędy."]}]},"MMAP-P0-100-1805-n28":{max:2,solution:`I sposób
Nierówność możemy przekształcić równoważnie
(a+b)/2ab ≥ 2/(a+b) .
Ponieważ liczby a i b są dodatnie, więc a+b >0 i 2ab >0. Mnożąc obie strony nierówności
przez 2ab a( +b) , otrzymujemy
(a+b)^2 ≥ 4ab,
a^2 +2ab+b^2 ≥ 4ab,
a^2 −2ab+b^2 ≥0,
(a−b)^2 ≥ 0.
Ta nierówność jest prawdziwa dla dowolnych liczb rzeczywistych a i b, więc w szczególności
również dla liczb dodatnich. To kończy dowód.
II sposób
Nierówność możemy przekształcić równoważnie
((a+b)/2ab − 2/(a+b) ≥0,)/2
−4ab
((a+b))/(2ab a(+b)) ≥ 0.
Ponieważ liczby a i b są dodatnie, więc a+b >0 i 2ab >0. Mnożąc obie strony nierówności
przez 2ab a( +b) , otrzymujemy
(a+b)^2 −4ab ≥ 0,
a^2 +2ab+b^2 −4ab ≥0,
a^2 −2ab+b^2 ≥0,
(a−b)^2 ≥ 0.
Ta nierówność jest prawdziwa dla dowolnych liczb rzeczywistych a i b, więc w szczególności
również dla liczb dodatnich. To kończy dowód.`,levels:[{points:2,alts:["gdy przeprowadzi pełne rozumowanie."]},{points:1,alts:["gdy zapisze nierówność w postaci (a+b)^2 ≥ 4ab lub (a+b)^2 −4ab ≥ 0, lub −4ab ((a+b))/(2ab a(+b)) ≥ 0"]}]},"MMAP-P0-100-1905-n28":{max:2,solution:`I sposób
Przekształcamy równoważnie nierówność i otrzymujemy kolejno:
3a^2 −2ab+3b^2 ≥ 0 ,
2a^2 +a^2 −2ab+b^2 +2b^2 ≥ 0,
2a^2 +(a−b)^2 +2b^2 ≥ 0.
Lewa strona nierówności jest sumą trzech liczb nieujemnych: 2a^2 – jako wielokrotność
kwadratu liczby, (a−b)^2 – jako kwadrat liczby, 2b^2 – jako wielokrotność kwadratu liczby.
Zatem z lewej strony nierówności występuje wyrażenie przyjmujące wartość nieujemną, czyli
nierówność jest prawdziwa dla dowolnych rzeczywistych liczb a i b.
To kończy dowód.
Uwaga
Całe rozumowanie można zapisać w postaci
3a^2 −2ab+3b^2 ≥ a^2 −2ab+b^2 = (a−b)^2 ≥ 0 ,
co jest prawdą dla dowolnych liczb rzeczywistych a, b.
II sposób
Przekształcamy równoważnie nierówność i otrzymujemy kolejno:
3a^2 −2ab+3b^2 ≥ 0 ,
a^2 − 2/3 ab+b^2 ≥ 0,
1 1
()/() a− b ()/() − b^2 +b^2 ≥ 0,
3 9
 
1 8
()/() a− b ()/() + b^2 ≥ 0.
3 9
 
1
Lewa strona nierówności jest sumą dwóch liczb nieujemnych: ()/() a− b ()/() – jako kwadrat liczby,
3
 
8/9 b^2 – jako wielokrotność kwadratu liczby.
Zatem z lewej strony nierówności występuje wyrażenie przyjmujące wartość nieujemną, czyli
nierówność jest prawdziwa dla dowolnych rzeczywistych liczb a i b.
To kończy dowód.
III sposób
Wyrażenie z lewej strony jest trójmianem kwadratowym dla zmiennej a, z parametrem b.
Obliczamy wyróżnik tego trójmianu kwadratowego:
Δ = (−2b)^2 −4 3 3⋅ ⋅ b^2 = 4b^2 −36b^2 = −32b^2 .
Obliczony wyróżnik trójmianu kwadratowego jest niedodatni dla dowolnej liczby rzeczywistej b.
Zatem trójmian kwadratowy ni`,levels:[{points:2,alts:["gdy przeprowadzi pełne rozumowanie."]},{points:1,alts:["zapisze nierówność w postaci, zawierającej po jednej stronie 0, a po drugiej sumę wyrażeń algebraicznych, będących wielokrotnościami kwadratów liczb lub stanowiących jedną stronę wzoru skróconego mnożenia, którego druga strona jest kwadratem, np.: 2a^2 +a^2 −2ab+b^2 +2b^2 ≥ 0","zapisze oszacowanie 3a^2 −2ab+3b^2 ≥ a^2 −2ab+b^2","obliczy wyróżnik trójmianu kwadratowego w zależności od zmiennej a lub b, występującego po jednej stronie nierówności, gdy po drugiej stronie jest 0, i stwierdzi, że jest on niedodatni","rozważa dwa przypadki: w pierwszym stwierdza, że gdy ab ≤0, to nierówność jest prawdziwa, a drugim doprowadza nierówność do postaci a/b + b/a ≥ 2/3","rozważa dwa przypadki: w jednym dzieli stronami nierówność przez b^2 lub przez a^2 , a w drugim przyjmuje, że a lub b jest równe 0, oraz w przypadku, w którym dzieli stronami nierówność i obliczy wyróżnik otrzymanego trójmianu kwadratowego","zapisze, że prawdziwa jest nierówność 2a^2 +2b^2 ≥ 0 oraz zapisze, że prawdziwa jest nierówność (a−b)^2 ≥ 0 i przedstawi tę nierówność w postaci równoważnej a^2 −2ab+b^2 ≥ 0","wskaże, że przeprowadza dowód nie wprost, zapisze nierówność 3a^2 −2ab+3b^2 < 0 oraz zapisze jeden z dwóch poniższych komentarzy: o nierówność (a−b)^2 < 0 jest nieprawdziwa; o nierówność (a−b)^2 ≥ 0 jest prawdziwa oraz nierówność 2a^2 +2b^2 < 0 jest nieprawdziwa"]}]},"MMAP-P0-100-2203-n10-2":{max:1,solution:"(−∞, −1] ∪ [3,+∞)",levels:[{points:1,alts:["rozwiązanie poprawne."]},{points:0,alts:["rozwiązanie niepoprawne lub niepełne albo brak rozwiązania."]}]},"MMAP-P0-100-2203-n13-2":{max:3,solution:`Sposób 1.
Pacjent przyjmuje jedenastą dawkę leku po 40 dniach, licząc od momentu przyjęcia
pierwszej dawki.
Tuż przed przyjęciem jedenastej dawki leku w organizmie pacjenta znajduje się:
100 ⋅ ( 1/2 ) mg leku z pierwszej dawki,
9
100 ⋅ ( 1/2 ) mg leku z drugiej dawki,
Arkusz pokazowy z egzaminu maturalnego z matematyki (poziom podstawowy)
8
100 ⋅ ( 1/2 ) mg leku z trzeciej dawki,
⋮
2
mg leku z dziewiątej dawki,
(100⋅( 1/2 ))/1
100 ⋅ ( 1/2 ) mg leku z dziesiątej dawki.
Łącznie w organizmie pacjenta znajduje się
1^10
1 2 9 10
1 − ( )
1
(1/(100⋅())/2 ) (1/(+100⋅())/2 ) (1/(+...+100⋅())/2 ) + 100 ⋅ ( (1/()))/2 = 100 ⋅ ⋅ =
2
((2/1)/1−)/2
= 100(1 − ( 1/2 ) ) ≈ 99,9 mg leku.
Sposób 2.
Obliczamy i zapisujemy w lewej tabeli łączną masę leku (w mg), który jest w organizmie
pacjenta tuż po przyjęciu każdej kolejnej dawki 100 mg tego leku.
W prawej tabeli obliczamy i zapisujemy masę leku (w mg), który pozostaje w organizmie
pacjenta tuż przed przyjęciem kolejnej dawki, z uwzględnieniem czasu półtrwania tego leku
(T = 4 doby) w organizmie pacjenta.
tuż po przyjęciu tuż przed przyjęciem
1. dawki 100 50 2. dawki
2. dawki 150 75 3. dawki
3. dawki 175 87,5 4. dawki
4. dawki 187,5 93,75 5. dawki
5. dawki 193,75 96,88 6. dawki
6. dawki 196,88 98,44 7. dawki
7. dawki 198,44 99,22 8. dawki
8. dawki 199,22 99,61 9. dawki
9. dawki 199,61 99,81 10. dawki
10. dawki 199,81 99,9 11. dawki
Zatem tuż przed przyjęciem jedenastej dawki łączna masa tego leku w organizmie pacjenta
jest równa 99,9 mg.`,levels:[{points:3,alts:["poprawna metoda obliczenia masy leku tuż przed przyjęciem jedenastej dawki i poprawny wynik: 99,9 mg."]},{points:2,alts:["poprawne zastosowanie wzoru na sumę początkowych kolejnych wyrazów ciągu 1−(^1 geometrycznego i zapisanie sumy w postaci 100 ⋅ 1/2 ⋅ ((2/1)/1−)/2 LUB wypisanie wszystkich mas leku pozostających w organizmie tuż przed przyjęciem jedenastej dawki (z kolejno przyjmowanych dawek) albo mas leku pozostały"]},{points:1,alts:["poprawne wyznaczenie mas leku, jakie pozostały w organizmie z poszczególnych dawek na moment przed przyjęciem jedenastej dawki: 9 8 100 ⋅ ( 1/2 ) mg, 100 ⋅ ( 1/2 ) mg, 100 ⋅ ( 1/2 ) mg, ..., 100 ⋅ ( 1/2 ) mg LUB obliczenie poszczególnych mas leku pozostających w organizmie przed przyjęciem jedenaste"]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-P0-100-2005-n28":{max:2,solution:`I sposób
Przekształcamy równoważnie nierówność i otrzymujemy kolejno:
a^2 −2ab+2b^2 > 0 ,
a^2 −2ab+b^2 +b^2 > 0,
(a−b)^2 +b^2 > 0.
Nierówność (a−b)^2 +b^2 > 0 jest prawdziwa, ponieważ:
1) wyrażenie (a −b)^2 jest dodatnie, gdyż z założenia wynika a−b ≠ 0 i kwadrat każdej
liczby rzeczywistej różnej od zera jest dodatni,
2) wyrażenieb^2 jest nieujemne,
3) suma dwóch liczb rzeczywistych, z których jedna jest liczbą dodatnią, a druga liczbą
nieujemną, jest liczbą dodatnią.
To kończy dowód.
II sposób
Przekształcamy równoważnie nierówność i otrzymujemy:
a^2 −2ab+2b^2 > 0 .
Wyrażenie a^2 −2ab+2b^2 traktujemy jako trójmian kwadratowy jednej zmiennej np. a.
Wyróżnik trójmianu kwadratowego a^2 −2ab+2b^2 jest równy:Δ = 4b^2 −8b^2 = −4b^2 .
Ten wyróżnik jest niedodatni dla każdej rzeczywistej wartości b.
Gdy Δ <0, to a^2 −2ab+2b^2 > 0 dla każdej rzeczywistej wartości a.
Gdy Δ =0, to b = 0, stąd a^2 > 0, ponieważ z założenia a ≠b.
Oznacza to, że dla każdych dwóch różnych liczb rzeczywistych a i b prawdziwa jest
nierównośća^2 −2ab+2b^2 > 0 .
To kończy dowód.
III sposób
Przekształcamy równoważnie nierówność a a( −2b)+2b^2 >0i otrzymujemy:
a^2 −2ab+2b^2 > 0.
Z założenia wynika, że liczby a i b nie mogą jednocześnie przyjmować wartości 0 .
Jeżeli b ≠0, to b^2 > 0. Dzielimy obie strony nierówności przez b^2 i otrzymujemy nierówność
równoważną
a
(a)/() −2 + 2 > 0 .

 b  b
Niech x = a/b . Otrzymujemy nierówność kwadratową x^2 −2x+2 > 0 z niewiadomą x .
Zauważamy, że ta nierówność jest prawd`},"MMAP-P0-100-2105-n30":{max:2,solution:`Sposób 1.
Z założenia wiadomo, że a, b, c są dowolnymi liczbami rzeczywistymi dodatnimi i a < b.
Przekształcamy równoważnie nierówność (a)/(b) < (a+c)/(b+c) :
(a)/(b) − (a + c)/(b + c) < 0
(a(b + c) − b(a + c))/(b(b + c)) < 0
(a(b + c) − b(a + c))/(b(b + c)) < 0
(ab + ac − ab − bc)/(b(b + c)) < 0
(ac − bc)/(b(b + c)) < 0
(c(a − b))/(b(b + c)) < 0
Z założenia liczby b i c są dodatnie, więc b(b + c) > 0.
Z założenia c jest dodatnia i a − b < 0, więc c(a − b) < 0.
Zatem (c(a−b))/(b(b+c)) jest liczbą ujemną (jako iloraz liczby ujemnej i dodatniej), czyli nierówność
(c(a−b))/(b(b+c)) < 0 jest prawdziwa. To należało wykazać.
Sposób 2.
Z założenia wiadomo, że a, b, c są dowolnymi liczbami rzeczywistymi dodatnimi i a < b.
Przekształcamy równoważnie nierówność (a)/(b) < (a+c)/(b+c) :
(a)/(b) − (a + c)/(b + c) < 0 /⋅ b(b + c)
(zwrot nierówności nie zmieni się, gdyż b ⋅ (b + c) > 0)
a(b + c) − b(a + c) < 0
ab + ac − ab − bc < 0
c(a − b) < 0
Z założenia c > 0 oraz a − b < 0 , więc c(a − b) < 0.
Zatem nierówność (a)/(b) < (a+c)/(b+c) jest prawdziwa. To należało wykazać.
Sposób 3.
Z założenia wiadomo, że a, b, c są dowolnymi liczbami rzeczywistymi dodatnimi i a < b.
Przekształcamy równoważnie nierówność (a)/(b) < (a+c)/(b+c) :
(a)/(b) < (a + c)/(b + c) /⋅ b(b + c)
(zwrot nierówności nie zmieni się, gdyż b ⋅ (b + c) > 0)
a(b + c) < b(a + c)
ab + ac < ab + bc
ac < bc
Z założenia c > 0, więc otrzymujemy a < b, co jest prawdą.
Zatem nierówność (a)/(b) < (a+c)/(b+c) jest prawdziwa. To należało `,levels:[{points:2,alts:["gdy przeprowadzi pełne rozumowanie – zdający musi spełnić warunki określone w zasadach oceniania za 1 punkt oraz:  wykorzystać założenie a < b w sytuacjach 1), 2), 3) określonych w pierwszym punktorze zasad oceniania za 1 punkt"," wykorzystać założenie a < b i porównać ułamki w sytuacji określonej jako 4) w pierwszym punktorze zasad oceniania za 1 punkt"," przeprowadzając dowód wprost, doprowadzić nierówność a < b do tezy"," przeprowadzając dowód nie wprost, doprowadzić nierówność (a)/(b) ≥ (a+C)/(b+C) do postaci a ≥ b i stwierdzić sprzeczność z założeniem a < b."]},{points:1,alts:[" przekształci nierówność (a)/(b) < (a+C)/(b+C) do postaci równoważnej, z której można przeprowadzić bezpośrednie wnioskowanie o prawdziwości tezy, np. 1) (c(a−b))/(b(b+c)) < 0 lub 2) c(a − b) < 0 lub 3) ca < cb lub 4) (a−b)/(b) < (a−b)/(b+c)"," przekształci nierówność a < b do postaci równoważnej a(b + c) < b(a + c)"," przeprowadzając dowód nie wprost, przekształci nierówność (a)/(b) ≥ (a+C)/(b+C) (która jest zaprzeczeniem tezy) do postaci ac ≥ bc"]}]},"MMAP-R0-100-1605-n12":{max:6,solution:`Rozwiązanie zadania dzielimy na cztery etapy. W pierwszym etapie wyznaczymy wszystkie
wartości parametru m, dla których trójmian f ma dwa różne pierwiastki. W drugim,
wyznaczymy te wartości parametru m, dla których pierwiastki trójmianu spełniają warunek
x − x <3. W trzecim wyznaczamy te wartości parametru m, dla których pierwiastki x , x
1 2 1 2
są tego samego znaku. W czwartym – końcowym etapie, wyznaczymy wszystkie szukane
wartości parametru m.
I etap
Ponieważ trójmian f ma dwa różne pierwiastki, więc wyróżnik Δ tego trójmianu jest dodatni,
zatem
Δ = (2(m+1))^2 −4 1⋅ ⋅(6m+1) > 0.
Nierówność (2(m+1))^2 −4 1⋅ ⋅(6m+1) > 0 przekształcamy w sposób równoważny
4(m^2 +2m+1)−4⋅(6m+1) > 0,
m^2 +2m+1−6m−1> 0,
m^2 −4m > 0,
m m( −4) > 0.
Rozwiązaniem tej nierówności jest każda liczba m∈ −∞( , 0)∪(4,+∞).
II etap
I sposób
Nierówność x − x <3 można zapisać, stosując wzory na pierwiastki trójmianu
1 2
kwadratowego, w postaci
Δ Δ
−b−/2a − (−b+)/2a <3,
− Δ
<3,
a
− Δ
<3,
1
Δ < 3.
Ponieważ Δ > 0, więc Δ > 0. Zatem obie strony nierówności są dodatnie. Stąd 0 < Δ < 9.
Zatem
4(m^2 +2m+1)−4 6( m+1)−9 < 0,
4m^2 −16m−9 < 0,
1
(m∈ ()/() −)/() (, (9)/() .)/(2)
2
II sposób
Obie strony nierówności x − x <3 są dodatnie, więc podnosząc je do kwadratu,
1 2
otrzymujemy nierówność równoważną
(x − x )^2 < 9.
1 2
Tę nierówność możemy z kolei zapisać w postaci
(x + x )^2 −4x x < 9.
1 2 1 2
Ze wzorów Viète’a otrzymujemy nierówność z niewiadomą m:
4(m^2 +2m+1)−4 6( m+1)−9 < 0,
1
(m∈ ()/() −)/() (, (9)/(`},"MMAP-R0-100-1605-n13":{max:5,solution:`Zauważamy, że jeżeli AC jest przekątną czworokąta ABCD, wpisanego w okrąg i prosta
AC jest osią symetrii tego czworokąta, to ten czworokąt jest deltoidem, a trójkąty ABC
i ADC są prostokątne. Obliczymy najpierw współrzędne wierzchołka D , który jest obrazem
wierzchołka B , w symetrii osiowej względem prostej AC . Ponieważ prosta BD jest
prostopadła do prostej AC i przechodzi przez punkt B , więc jej równanie ma postać
y = −x +8 .
Obliczamy współrzędne środka S przekątnej BD. Ponieważ jest to punkt przecięcia
prostych AC i BD, więc wystarczy rozwiązać układ równań
y = x+2

y = −x+8

Otrzymujemy stąd x = 3 i y = 5 . Zatem punkt S ma współrzędne S=(3,5). Współrzędne
punktu D spełniają zatem równania
x +0 y +8
D D
= 3 i = 5.
2 2
Stąd wynika, że x =6 i y =2, czyli D=(6,2).
D D
Obliczymy teraz współrzędne wierzchołka C . Zauważamy, że jest to punkt przecięcia prostej
AC i prostej CD , która jest prostopadła do prostej AD i przechodzi przez punkt D.
Ponieważ współczynnik kierunkowy prostej AD jest równy^(2−32) =^5 , więc prosta CD ma
6−30 4
równanie postaci
y = −^4 (x −6)+ 2 .
5
(y=x+2)/() x =^24 =^8
 9 3
Rozwiązujemy układ równań i otrzymujemy  .
 4
y = − (x −6)+ 2 y =^42 =^14
  9 3
 5
Zatem C = (^814 , ).
3 3`},"MMAP-R0-100-1605-n16":{max:7,solution:`Niech C = (x y, ) będzie wierzchołkiem trapezu ABCD. Wówczas C =(x, 2−^12 ), gdzie
0 < x < 2. Ponieważ AB = 4 , CD = 2x , a wysokość trapezu jest równa ((2 x/1)/(h=2−))/2 x^2 , więc
pole P tego trapezu określone jest wzorem
4+2x 2 2 2 3 2 3
P x( ) = ⋅(2−^1 x ) =(x+2)⋅^1 (4− x ) =^1 (8+4x−2x − x ) = 4+2x− x −^1 x
2 2 2 2
2
dla każdej liczby rzeczywistej 0 < x < 2.
Pochodna funkcji P x( ) = 4+2x− x^2 −^1 x^3 jest równa P′(x) = 2−2x−^3 x^2 dla x∈(0, 2).
2 2
Obliczamy miejsca zerowe pochodnej i badamy jej znak.
2
Ponieważ P′(x) = −^3 x^2 +^4 x−^4 = −^3 x+^2 −^16 = −^3 x−^2 x+2)
( ) (( ) ) ( )(
2 3 3 2 3 9 2 3
oraz −^3 (x+2) < 0 dla każdego x∈(0, 2), więc:
2
P′(x) = 0 wtedy i tylko wtedy, gdy x =^2 ,
3
P′(x) > 0 wtedy i tylko wtedy, gdy x−^2 < 0 i x∈(0, 2), czyli dla x∈(0,^2 ),
3 3
P′(x) < 0 wtedy i tylko wtedy, gdy x−^2 > 0 i x∈(0, 2), czyli dla x∈^2 , 2 .
( )
3 3
Zatem w przedziale (0,^2 funkcja P jest rosnąca, w przedziale 2/3 , 2) jest malejąca,
3
2
a w punkcie x =^2 osiąga maksimum. Jeżeli x =^2 , to C =^2 , 2−^1 ⋅(^2 ) =(^216 , ).
3 3 ( 3 2 3 ) 3 9
Uwaga:
Zdający może zauważyć, że z nierówności dla średniej arytmetycznej i średniej
geometrycznej wynika, że dla x∈(0, 2) iloczyn
(x+2)(4− x^2 ) = (x+2)(x+2)(2− x) = 4(^(x) +1)(^(x) +1)(2− x)
2 2
przyjmuje największą wartość równą
3
3
( x/2 +1+ x/2 +1+2−x)/(4)
 = 4⋅(^4 ) , gdy^(x) +1= 2− x, czyli dla x =^2 .
3 2 3
3
 
Takie rozumowanie zastępuje drugi etap rozwiązania.`},"MMAP-R0-100-1705-n12":{max:5,solution:`I sposób
Zapisujemy układ warunków
Δ > 0


(4x −4x )^2 −1< 0
 1 2
Rozwiązujemy nierówność Δ > 0, czyli 36m^2 −16 2( m^2 −3m−9) > 0. Po uporządkowaniu
otrzymujemy nierówność 4(m+6)^2 > 0 , której rozwiązaniem są wszystkie liczby
rzeczywiste oprócz m = −6.
Drugą nierówność przekształcamy równoważnie i otrzymujemy kolejno:
16(x − x )^2 −1< 0,
1 2
16(x^2 −2x x + x^2 )−1< 0,
1 1 2 2
2
16 x + x −4x x −1< 0.
( 1 2 ) 2
 1/2 
36m 2m^2 −3m−9
Stosujemy wzory Viete'a i otrzymujemy: 16 −4⋅ −1< 0.
 
16 4
 
Przekształcamy nierówność równoważnie otrzymujemy kolejno:
36m^2 −32m^2 +48m+143< 0,
4m^2 +48m+143< 0.
Rozwiązujemy tę nierówność.
Δ = 2304−2288 = 4^2
−48−4 13 −48+4 11
m = = − , m = = − ,
1 2
8 2 8 2
 13
m∈ −
 (,− (11)/() .)/(2)
 2
 13
Wyznaczamy część wspólną obu warunków: m∈ − ,−6 ()/() ∪ ()/() −6,− (11)/() .

 2   2 
II sposób
Rozwiązujemy nierówność Δ > 0, czyli 36m^2 −16 2( m^2 −3m−9) > 0. Po uporządkowaniu
otrzymujemy nierówność 4(m+6)^2 > 0 , której rozwiązaniem są wszystkie liczby
rzeczywiste oprócz m = −6.
Obliczamy pierwiastki równania, z zachowaniem warunku x < x :
1 2
6m−2 m+6 3m− m+6 6m+2 m+6 3m+ m+6
x = = , x = = .
1 2
8 4 8 4
Obliczamy wartość wyrażenia 4x −4x w zależności od m:
1 2
−2 m+6
4x −4x = 4⋅ = −2 m+6 .
1 2
4
Zapisujemy nierówność z treści zadania z wykorzystaniem wyznaczonych rozwiązań
równania i przekształcamy ją równoważnie, otrzymując kolejno:
(−2 m+6 −1)(−2 m+6 +1) < 0,
−1−4 m+6^2  < 0,
( )
 
4m^2 +48m+143< 0.
Dalsza częś`},"MMAP-R0-100-1705-n13":{max:5,solution:`I sposób
Środek S szukanego okręgu jest punktem przecięcia prostej x−3y+1= 0 oraz symetralnej
odcinka AB.
Wyznaczmy współrzędne środka D odcina AB: D = (−5+0)/() , (3+6)/() = (−5)/() , (9)/() .
 2 2   2 2
Obliczamy współczynnik kierunkowy prostej przechodzącej przez punkty A i B:
6−3 3
a = = .
AB
0+5 5
Z warunku prostopadłości prostych wyznaczamy współczynnik kierunkowy symetralnej
odcinka AB: a = − 5/3 . Wyznaczamy równanie symetralnej odcinka AB: y = − 5/3 x+b.
5 9 5
Przechodzi ona przez punkt , (9)/() , stąd otrzymujemy = − ⋅ ()/() − (5)/() +b. Zatem
(D= ()/() −)/()
2 2 2 3  2
b = 1/3 . Wobec tego symetralną odcinka AB jest prosta y = − 5/3 x+ 1/3 .
x−3y+1= 0

Obliczamy współrzędne punktu S, rozwiązując układ równań 5 1 Środkiem
x+ .
(()/() y= −)/()
3 3
okręgu jest S = ()/() 0, (1)/() .
 3
17
Wyznaczamy promień okręgu r obliczając np.: AS = 5^2 + (8)/() = .

3 3
17
Wyznaczamy równanie okręgu o środku w punkcie i promieniu r = :
(S= ()/() 0, (1)/())/()
3 3
289
x^2 = .
(+ ()/() y− (1)/())/()
3 9
II sposób
Środkiem okręgu jest punkt S, który leży na prostej x−3y+1= 0. Zatem S =(3y−1, y).
Ponieważ AS^2 = BS^2 , więc możemy zapisać równanie (x+5)^2 +(y−3)^2 = x^2 +(y−6)^2 .
Rozwiązujemy zatem układ równań
10x+6y = 2 i x−3y = −1,
otrzymując współrzędne punktu S
(S= ()/() 0, (1)/() .)/()
3
Następnie obliczamy kwadrat długości promienia SB^2 = r^2
289
r^2 = (17)/() = .

 3  9
289
Zatem równanie okręgu o środku w punk`},"MMAP-R0-100-1805-n7":{max:3,solution:`I sposób – bilans kątów
Oznaczmy miary kątów trójkąta ABC odpowiednio przez 2α, 2β, 2γ , a punkt wspólny
dwusiecznej d i odcinka KL przez P, dwusiecznej d i odcinka LM przez R oraz
A C
dwusiecznej d i odcinka MN przez Q.
B
C
L
R
M
P
Q
A B
K N
Wówczas 2α + 2β + 2γ =180°, stąd α + β +γ =90°. Wtedy
KAP =α , zatem AKP = 90° −α i LKN =180° −(90° −α) = 90° +α
oraz
CMR = 90° −γ oraz BMQ = 90° −β ,
zatem LMN =180° −(90° −γ )−(90° −β) = β +γ .
Suma kątów LKN i LMN jest więc równa
LKN + LMN = (90° +α)+(β +γ ) =α + β +γ +90° =180°.
To oznacza, że na czworokącie KNML można opisać okrąg.
II sposób – symetralne
C
L
R
M
O
P
Q
A B
K N
Rozważmy trójkąt KLM. Z definicji symetrii osiowej wynika, że dwusieczna d jest
A
symetralną boku KL. Analogicznie dwusieczna d jest symetralną boku LM. Symetralne
C
boków trójkąta przecinają się w jednym punkcie, który jest środkiem okręgu opisanego na
tym trójkącie – oznaczmy go przez O. Czyli punkt wspólny dwusiecznych d i d
A C
(symetralnych boków trójkąta KLM) jest środkiem okręgu, którego promieniem jest
w szczególności odcinek OL.
Podobnie rozważmy trójkąt LMN . Z definicji symetrii osiowej wynika, że dwusieczna d
C
jest symetralną boku LM . Analogicznie dwusieczna d jest symetralną boku MN . Punkt
B
wspólny tych dwusiecznych (symetralnych) jest tym samym punktem, o którym była mowa
wyżej i jest oczywiście środkiem okręgu opisanego na trójkącie LMN. Zatem musi to być ten
sam okrąg. Wszystkie wierzchołki czworokąta KNML leżą na tym okręgu. To końc`,levels:[{points:2,alts:["wyznaczy miary dwóch przeciwległych kątów czworokąta KNML w zależności od miar kątów trójkąta ABC, np.: LKN = 90° +α i LMN = β +γ","zapisze, że punkt przecięcia dwusiecznych kątów trójkąta ABC jest środkiem okręgu opisanego na trójkącie KLM lub na trójkącie LMN, lub że jest punktem przecięcia symetralnych trzech boków czworokąta KNML","zapisze i uzasadni jedną lub dwie równości spośród: OL = OK , OL = OM , OM = ON"]},{points:1,alts:["wyznaczy miarę jednego z kątów czworokąta KNML w zależności od miar kątów trójkąta ABC, np.: LKN = 90° +α","zapisze, że prosta zawierająca dwusieczną kąta trójkąta ABC jest symetralną jednego z odcinków KL, LM, MN","zapisze jedną lub dwie równości spośród: OL = OK , OL = OM , OM = ON"]}]},"MMAP-R0-100-1805-n12":{max:6,solution:`Równanie ma dwa różne rozwiązania rzeczywiste, gdy jego wyróżnik jest dodatni, czyli
Δ =(m+1)^2 −4 1⋅ ⋅ −( m^2 +1) >0
5m^2 +2m−3> 0
m = −1, m = 3/5 .
1 2
Stąd m∈ −∞ −( , 1)∪^3 , + ∞
( )
5
Warunek x^3 + x^3 > −7x x możemy zapisać w postaci równoważnej
1 2 1 2
(x + x )(x^2 −x x + x^2 ) > −7x x ,
1 2 1 1 2 2 1 2
(x + x ) (x + x )^2 −3x x > −7x x .
1 2 ( 1 2 1 2 ) 1 2
Ze wzorów Viète’a na sumę i iloczyn pierwiastków trójmianu kwadratowego możemy tę
nierówność zapisać w postaci:
−b  −b^2 c  c
( ) −3
a (> −7)/() a
(a () ()/() a)/2
−(m+1) (−(m+1)) −3(−m^2 +1) > −7(−m^2 +1)
( )
−(m+1)^3 +3(m+1)(−m^2 +1) > −7(−m^2 +1)
−(m+1)^3 +3(m+1)(−m^2 +1)+7(−m^2 +1) > 0
(m+1) −(m+1)^2 +3(−m^2 +1)+7(−m+1) > 0
( )
(m+1)(−m^2 −2m−1−3m^2 +3+7−7m) > 0
(m+1)(−4m^2 −9m+9) > 0
3
m = −3 lub m = lub m = −1.
1 2 3
4
m∈ −∞ −( , 3)∪ −( 1,^3 ).
4
Wyznaczamy część wspólną zbiorów (−∞ −, 1)∪(^3 ,+ ∞) i (−∞ −, 3)∪ −( 1,^3 ).
5 4
Odpowiedź m∈ −∞ −( , 3)∪(^33 , ).
5 4`},"MMAP-R0-100-1805-n15":{max:7,solution:`Przyjmijmy oznaczenia jak na rysunku.
Wyznaczmy dziedzinę funkcji L. Z warunków zadania wynika, że a > h, więc a > 2−a.
Stąd a >1. Jeśli a =1, to czworokąt jest kwadratem. Ponadto a < 2. Jeśli a = 2, to h = 0
i zamiast trapezu mamy do czynienia z odcinkiem o długości 2.
Rozważany trapez istnieje jedynie dla a∈(1, 2).
Z warunków zadania otrzymujemy
a+h = 2, skąd h = 2−a .
Ponieważ w trapez można wpisać okrąg, więc
a+b = 2c .
Obwód L trapezu jest więc równy
L = a+b+2c = 2(a+b).
Trapez jest równoramienny, więc odcinki AE i FB mają tę samą długość równą
p = a−b/2 .
Z twierdzenia Pitagorasa dla trójkąta BCF otrzymujemy
p^2 +h^2 = c^2 ,
(a−b)/() +h^2 = (a+b)/() ,
 
 2   2 
a/4 = a/4 + ab/2 + b/4 ,
(− ab/2 + b/4 +h)/2
h = ab,
(2−a)^2 = ab,
2
a^2
b = ((2−a))/a = (−4a+4)/a .
Zatem
 a^2 −4a+4 2a^2 −4a+4
L = a+b+2c = 2(a+b) = 2 a+ = 2⋅ ,
 
a a
 
czyli
4a^2
L a( ) = (−8a+8)/a dla a∈(1, 2).
Pochodna funkcji L jest równa
2
2 4 a− 2 a+ 2
(8a−8)⋅a−(4a −8a+8)⋅1 ( )( )
4a
L′(a) = = −8/2 = dla a∈(1, 2).
a^2 a a^2
2)
Ponieważ dla każdego a∈(1, 2) prawdziwa jest nierówność > 0, więc
((4(a+)/2)/a
L′(a) = 0 ⇔ a− 2 = 0∧a∈(1, 2) ⇔ a = 2 ,
L′(a) > 0 ⇔ a− 2 > 0∧a∈(1, 2) ⇔ a∈ 2, 2 ,
( )
L′(a) < 0 ⇔ a− 2 < 0∧a∈(1, 2) ⇔ a∈ 1, 2 .
( )
Oznacza to, że w przedziale (1, 2 funkcja L jest malejąca, w przedziale 2, 2) jest
rosnąca, a w punkcie a = 2 osiąga minimum lokalne, które jest zarazem jej najmniejszą
wartością.
Tangens kąta ostrego trapezu o najmniejszym obwodzie jest równy
h a a( −2)
tg`},"MMAP-R0-100-1905-n5":{max:2,solution:`Ponieważ
11
9+
n^2 1
9n^3 +11n^2
n lim =lim
oraz
lim/(n→∞) 3 2 (=lim)/(n→∞)
5 3 1 n→∞ 3n^2 +1 n→∞ 1
7n +5n +3n +1
7 + + + 3+
n n^2 n^3 n^2
11 5
a ponadto = = = = 0,
lim/(n→∞) lim/(n→∞) lim/(n→∞) (3/2)/n lim/(n→∞) (1/3)/n
n n
więc
11
9+
9+0 9
lim n/3 = = .
n→∞ 5 7 +0+0+ 0 7
7 + + +
(1/3)/n
n n^2
Podobnie, wykorzystując to, że 1/2 = 0, otrzymujemy
lim/(n→∞n)
1 1 1
n/2 = = .
lim/(n→∞3n) (=lim)/(n→∞)
+1 3+0 3
3+
(1/2)/n
Zatem istnieją (skończone) obie granice ciągów. Stąd granica różnicy tych ciągów jest równa
różnicy ich granic i
 9n^3 +11n^2 n^2 
− =^9 −^1 =^20 = 0, 952380( ).
(lim/(n→∞) )/() 7n^3 +5n^2 +3n +1 3n^2 +1 ()/() 7 3 21`},"MMAP-R0-100-1905-n13":{max:6,solution:`Rozwiązanie składa się z dwóch etapów.
Pierwszy etap
Wielomian W (x) jest podzielny przez dwumian x−2, więc 2 jest pierwiastkiem tego
wielomianu. Zatem W(2) = 0. Stąd otrzymujemy
16+4m^3 +8−22−4m−2=0,
4m^3 −4m = 0.
Przy dzieleniu wielomianu W (x) przez dwumian x+1 otrzymujemy resztę 6, więc
W( 1)− = 6. Stąd otrzymujemy
−2+m^3 +2+11−4m−2=6,
m^3 −4m+3 = 0.
4m^3 −4m=0
Rozwiązujemy układ równań
()/(m) 3
−4m+3=0.

I sposób
Z równania 4m^3 −4m = 0 otrzymujemy rozwiązania: m =0, m = −1, m=1.
Z tych trzech liczb tylko liczba 1 spełnia drugie równanie, zatem liczba 1 jest rozwiązaniem
układu równań.
II sposób
Z równania m^3 −4m +3 = 0 otrzymujemy rozwiązania: m=1, m = (− −113)/2 , m = (− +113)/2 .
Z tych trzech liczb tylko liczba 1 spełnia pierwsze równanie, zatem liczba 1 jest rozwiązaniem
układu równań.
III sposób
4m^3 −4m =0

Przyrównując lewe strony obu równań otrzymujemy
()/(m) 3
−4m+3=0

4m^3 −4m = m^3 −4m+3

()/(4m) 3
−4m =0

3m^3 −3=0
()/(4m) 3
−4m =0

m^3 =1 m =1

i 
()/(4m) 3
−4m =0 4m^3 −4m =0.
 
Sprawdzamy, czy liczba 1 spełnia jedno z równań:
4m^3 −4m = 0
4 1^3⋅ −4 1⋅ = 4−4 = 0
lub
m^3 −4m +3 = 0
1^3 −4 1⋅ +3 = 4−4 = 0
Liczba m=1 spełnia każde z równań układu, więc jest jedynym rozwiązaniem tego układu.
Drugi etap
Dla m=1 nierówność W x( ) ≤ 0 przyjmuje postać
2x^3 +3x^2 −11x −6 ≤ 0.
Rozwiązujemy tę nierówność stosując przekształcenia równoważne i otrzymujemy kolejno:
(x−2)(2x^2 +7x+3) ≤ 0,
2(x−2)(x+3)(x+^1 ) ≤ 0.
2
Zbiorem rozwiązań nierównośc`},"MMAP-R0-100-2203-n6-1":{max:2,solution:`Ponieważ R ∈ g, więc R = (x,−0,5(x − 0,5)^2 + 4). Zatem
2
√
|PR| = (x − (−1)) + (−0,5(x − 0,5)^2 + 4 − 1)^2
Stosując wzór na kwadrat sumy dwóch wyrażeń, otrzymujemy
|PR| = √x^2 + 2x + 1 + (−0,5(x − 0,5)^2 )^2 + 2 ⋅ (−0,5)(x − 0,5)^2 ⋅ 3 + 9
1 1 1 1
√
|PR| = x^2 + 2x + 1 + (x^2 − x + )(x^2 − x + ) − 3(x^2 − x + ) + 9
4 4 4 4
1 3 1 1 3
√
|PR| = x^2 + 2x + 1 + (x^4 − 2x^3 + x^2 − x + ) − 3x^2 + 3x − + 9
4 2 2 16 4
1 1 13 39 593
√
|PR| = x^4 − x^3 − x^2 + x +
4 2 8 8 64
To należało pokazać.`,levels:[{points:2,alts:["doprowadzenie wyrażenia określającego długość odcinka PR do postaci 1 1 13 39 593 √ x^4 − x^3 − x^2 + x + . 4 2 8 8 64"]},{points:1,alts:["przyjęcie R = (x,−0,5(x − 0,5)^2 + 4) (lub R = (x,g(x)) ) i zastosowanie wzoru na odległość dwóch punktów do wyznaczenia długości odcinka PR: |PR| = √(x + 1)^2 + (−0,5(x − 0,5)^2 + 4 − 1)^2 (lub |PR| = √(x + 1)^2 + (g(x) − 1)^2 )."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2203-n11":{max:4,solution:`Próbą Bernoullego jest losowe wybranie przez studenta odpowiedzi w zadaniu. Sukcesem
w tej próbie jest wybranie odpowiedzi, która jest poprawna.
Prawdopodobieństwo sukcesu jest równe p = 0,25, natomiast prawdopodobieństwo porażki
jest równe q = 0,75.
k
Niech S oznacza zdarzenie polegające na wybraniu przez studenta poprawnych
15
odpowiedzi w dokładnie k zadaniach spośród 15.
Korzystamy ze schematu Bernoullego. Prawdopodobieństwo zaliczenia przez studenta
egzaminu jest równe P(S^11 ∪ S^12 ∪ S^13 ∪ S^14 ∪ S^15 ). Zdarzenia S^11 , S^12 ,.S^13 , S^14 , S^15 są
15 15 15 15 15 15 15 15 15 15
parami rozłączne, więc
P(S^11 ∪ S^12 ∪ S^13 ∪ S^14 ∪ S^15 ) = P(S^11 ) + P(S^12 ) + P(S^13 ) + P(S^14 ) + P(S^15 ) =
15 15 15 15 15 15 15 15 15 15
15 15
= ( ) ⋅ (0,25)^11 ⋅ (0,75) (4 15/(+())/12 ) ⋅ (0,25)^12 ⋅ (0,75)^3 + ( ) ⋅ (0,25)^13 ⋅ (0,75)^2 +
11 13
15
+( ) ⋅ (0,25)^14 ⋅ (0,75) (1 15/(+())/15 ) ⋅ (0,25)^15 =
14
= ( 1/4 ) ⋅ (1365 ⋅ 81 + 455 ⋅ 27 + 105 ⋅ 9 + 15 ⋅ 3 + 1) = ( 1/4 ) ⋅ 123841 ≈ 0,00012
Prawdopodobieństwo zaliczenia przez studenta egzaminu jest równe
(123841/3 .)/1024`,levels:[{points:4,alts:["poprawna metoda obliczenia prawdopodobieństwa zaliczenia egzaminu przez studenta i poprawny wynik: (123841/15 .)/4"]},{points:3,alts:["poprawne zastosowanie wzoru na prawdopodobieństwo uzyskania k sukcesów w n próbach i skorzystanie z addytywności prawdopodobieństwa dla zdarzeń parami rozłącznych."]},{points:2,alts:["wyznaczenie zdarzenia odpowiadającego zaliczeniu egzaminu za pomocą zdarzeń S (k)/15 , gdzie k ∈ {11,12,13,14,15}: S^11 ∪ S^12 ∪ S^13 ∪ S^14 ∪ S^15 . 15 15 15 15 15"]},{points:1,alts:["obliczenie prawdopodobieństwa sukcesu i porażki."]},{points:0,alts:["rozwiązanie, w którym zastosowano niepoprawną metodę, albo brak rozwiązania."]}]},"MMAP-R0-100-2005-n5":{max:2,levels:[{points:2,alts:["poprawna odpowiedź."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MMAP-R0-100-2005-n6":{max:3,solution:`I sposób
Rozważmy funkcję f określoną wzorem f x x5 i naszkicujmy jej wykres.
Wnioskujemy stąd, że podane równanie ma dwa pierwiastki dodatnie, jeśli spełniona jest
nierówność
0a1^2 45, czyli nierówność 4a1^2 9.
Stąd otrzymujemy, że 2 a1 3, zatem
a1  3,22,3.
Ostatecznie a  2,13, 4.
II sposób („podstawianie”)
Równanie x5 a1^2 4ma dwa dodatnie rozwiązania rzeczywiste, gdy prawdziwa jest
nierówność
0 x5 5.
Ponieważ x5 a1^2 4, więc prawdziwa jest nierówność
0a1^2 45
Nierówność ta jest równoważna koniunkcji nierówności
a3a10 i a2a40,
skąd otrzymujemy
a   , 13, i a  2, 4.
Zatem dla a  2,13, 4 równanie x5 a1^2 4 ma dwa rozwiązania dodatnie.
III sposób
Równanie x5 a1^2 4 ma dwa rozwiązania, gdy spełniona jest nierówność
a1^2 40.
Nierówność ta jest równoważna nierówności a3a10, skąd otrzymujemy
a  1 lub a  3. (1)
Równanie x5 a1^2 4 jest równoważne alternatywie równań:
x5a1^2 4 lub x5 a1^2 4
x a1^2 1 lub x  a1^2 9
Rozwiązanie pierwszego z równań jest liczbą dodatnią, dla każdej liczby rzeczywistej a.
Zatem, aby równanie miało dwa dodatnie rozwiązania musi być spełniony warunek:
a1^2 90.
Stąd otrzymujemy 3a13a10, czyli a24a0, a zatem
2a4. (2)
Uwzględniając (1) i (2) otrzymujemy a  2,13, 4.
IV sposób
Ponieważ lewa strona równania x5 a1^2 4 jest nieujemna, więc równanie ma co
najmniej jedno rozwiązani`},"MMAP-R0-100-2005-n7":{max:3,solution:`I sposób
Najpierw uzupełnimy rysunek.
C
x
K L
P
M
A D B
A K
Z twierdzenia odwrotnego do twierdzenia Talesa wnosimy, że odcinek KL jest równoległy
do odcinka AB .
Oznaczmy środek odcinka KL przez P i niech CP  x.
Trójkąty CKP i CAD są podobne (cecha KKK) w skali 1:3. Wtedy PD  2x i MD  2x.
Trójkąty CPK i CMD są podobne (cecha KKK). Stąd PK/CK  MD/CD , czyli PK/2  2x/3x .
Stąd PK ^4 , więc AM ^8 oraz MC  6^8 ^10 .
3 3 3 3
AM 8/3 4
Zatem   .
MC 10/3 5
To kończy dowód.
II sposób
Najpierw uzupełnimy rysunek.
C
P
K L
M
A D B
A K
Z twierdzenia odwrotnego do twierdzenia Talesa wnosimy, że odcinek KL jest równoległy
do odcinka AB .
Niech punkt P będzie środkiem odcinka KL.
Zauważamy, że KM  KP , z twierdzenia o równości odcinków stycznych, łączących punkt
leżący poza okręgiem z punktami styczności.
Niech KM  KP t . Wtedy AD 3t i AM 4t . Trójkąt ADM jest podobny do trójkąta
ACD, na mocy cechy (kąt, kąt, kąt); są to trójkąty prostokątne, a kąt MAD jest wspólny dla
obu trójkątów.
Możemy zatem zapisać równość: AM/AD  AD/AC , czyli (4t)/3t  3t/6 , skąd otrzymujemy równanie
9t^2 6t 24  0.
Równanie to ma dwa rozwiązania: t  2,t  4/3 . Odrzucamy ujemne rozwiązanie tego
równania.
4 8
4
4 AM 4
Zatem t  . Ostatecznie  3/4  3/10  .
3 MC 5
2
3 3
To kończy dowód.`},"MMAP-R0-100-2005-n8":{max:3,solution:`I sposób
Zapisujemy równanie równoważne równaniu z założenia: a^2 2a1 4b^2 4b1.
Korzystamy ze wzoru skróconego mnożenia i zapisujemy to równanie w postaci
(a1)^2 (2b1)^2 . Oba wyrażenia w nawiasach są dodatnie, zatem równość kwadratów jest
równoważna równości tych wyrażeń, stąd a12b1 i dalej, a2b.
To kończy dowód.
II sposób
Przekształcamy założenie równoważnie:
a^2 4b^2  4b2a .
(a2b)(a2b)  2(a2b)
(a2b)(a2b2)  0.
Liczby a i b są dodatnie, zatem a2b20. Stąd a2b0, czyli a2b.
To kończy dowód.
III sposób
Wyrażenie a^2 2a4b^2 4b traktujemy jako trójmian kwadratowy jednej zmiennej np. a.
Wyróżnik trójmianu kwadratowego a^2 2a4b^2 4b jest równy: 4b2^2 .
Ten wyróżnik jest nieujemny dla każdej rzeczywistej wartości b.
Obliczamy pierwiastki tego trójmianu
a   2 2b lub a 2b.
Ponieważ b0, więc liczba  2 2b0, co jest sprzeczne z założeniem, że a 0.
Zatem a 2b.
To kończy dowód.`},"MMAP-R0-100-2005-n10":{max:5,solution:`I sposób
Sumując wyrazy ciągu geometrycznego otrzymujemy równość
21
a a qa q^2  . (1)
1 1 1
4
Niech b  będzie rosnącym ciągiem arytmetycznym.
n
Zatem b a q^2 , b  a q , b a , więc różnica tego ciągu r a qa q^2 oraz b b 3r ,
1 1 2 1 4 1 1 1 4 1
czyli a  a q^2 3a qa q^2 .
1 1 1 1
Stąd wynika, że a 3a q2a q^2 i a 2q^2 3q1  0.
1 1 1 1
1
Ponieważ z równości (1) wynika, żea 0 , więc 2q^2 3q10 . Zatem q 1 lub q  .
1
2
Dla q 1 ciąg a  jest stały. Stąd ciągb  też jest stały. Zatem tylko dla q ^1 ciąg b 
n n n
2
1
może być ciągiem rosnącym. Otrzymujemy wtedy r  a . Z równości (1) otrzymujemy
1
4
1 1 21
a  a  a  , a stąd wynika, że a 3.
1 1 1 1
2 4 4
II sposób
W ciągu arytmetycznym b  a , b a r ,b a 3r , gdzie r 0.
1 3 2 3 4 3
Ponieważ ciąga 3 ,r a r a,  jest ciągiem geometrycznym, więc zachodzi równość
3 3 3
a r^2 a 3ra ,
3 3 3
skąd wynika, że a^2 2a rr^2 a^2 3a r ,
3 3 3 3
a zatem r^2 a r.
3
Ponieważ z założenia r 0, więc r  a . Podana suma trzech wyrazów jest zatem równa
3
21
4a 2a a  .
3 3 3
4
3
Otrzymujemy zatema  . Wtedy a b  4a 3.
3 1 4 3
4
III sposób
Z danych w treści zadania wynikają równości:
b a q^2 , b  a q ,b a .
1 1 2 1 4 1
Ponieważ b  jest ciągiem arytmetycznym, więc możemy zapisać równości
n
b b a a q
4 2 1 1
b  
3
2 2
oraz
a a q 2
1 1
a q
1
b b
3 1 2
b    a q
2 1
2 2
Rozwiążemy równanie
a a q 2
1 1
a q
1
2
 a q
1
2
21
Ponieważ a a qa q^2  , więc możemy założyć, że a 0 . Powy`},"MMAP-R0-100-2005-n11":{max:4,solution:`I sposób
1. Równanie ma dwa różne rozwiązania, gdy wyróżnik trójmianu jest dodatni: 0.
Obliczamy wyróżnik trójmianu:
2 2
   3m2 4 2 m^2 7m15  m^2 16m64m8 .
m8^2  0, gdy m8.
Stąd wynika, że trójmian ma następujące pierwiastki: x m5 oraz x  2m3.
1 2
Mamy zatem rozwiązać równanie
2m5^2 5m52m32 2 m3^2  2.
To równanie doprowadzamy do postaci równoważnej:
20m^2 31m9  0.
9 1
Ma ono dwa rozwiązania: m   oraz m 
1 2
5 4
Każde z otrzymanych rozwiązań jest różne od 8.
9 1
Warunki zadania spełniają dwie wartości parametru m: m   oraz m  .
1 2
5 4
II sposób
Przekształcamy równość2x^2 5x x 2x^2  2w sposób równoważny:
1 1 2 2
2x^2  x^2 5x x  2,
1 2 1 2
2 x  x ^2 2x x 5x x  2,
 1 2 1 2  1 2
2x  x ^2  x x  2.
1 2 1 2
Ze wzorów Viète'a wynika, że
x x 3m2 oraz x x  2m^2 7m15 ,
1 2 1 2
o ile pierwiastki x i x trójmianu istnieją.
1 2
Mamy zatem rozwiązać równanie
2 3 m2^2 2m^2 7m15 2.
To równanie doprowadzamy do postaci równoważnej
20m^2 31m9  0.
Ma ono dwa rozwiązania:
9 1
m   oraz m  .
1 2
5 4
Pozostaje sprawdzić, czy dla tych wartości m dany trójmian kwadratowy ma dwa różne
pierwiastki. Możemy, tak jak w sposobie pierwszym, obliczyć wyróżnik i przekonać się, że jest
on nieujemny. Możemy także podstawić znalezione wartości parametru m do danego
trójmianu i przekonać się, że otrzymane trójmiany mają dwa różne pierwiastki.
Po podstawieniu m   9/5 otrzymamy trójmian:
x^2  17/5 x 528/25 .
Po podstawie`},"MMAP-R0-100-2005-n12":{max:5,solution:`I sposób
Wyznaczamy współrzędne środka okręgu oraz obliczamy promień tego okręgu,
doprowadzając równanie okręgu do postaci x4^2 y3^2 17.
Stąd odczytujemy, że środkiem okręgu jest punkt P 4,3 , a promień okręgu jest równy r  17 .
x^2 8x6y8 0
Obliczamy współrzędne punktów K i L rozwiązując układ równań: (y)/(y10x)

2 2

x 8x6 10  x8 0
 (10x)/(y10x)

x^2
 (11x240)/(y10x)

x 3 x 8
 lub  .
y 7 y  2
 
Zatem K 3,7 i L 8,2. Środek cięciwy KL , który jest środkiem jednokładności to punkt
11 9
S  , .
 
 2 2
Obrazem danego okręgu w jednokładności o środku S i skali k  3 jest okrąg o promieniu
 
R 3 17 oraz środku P a b,  takim, żeSP   3 SP. Otrzymujemy równość:
11 11
(()/() a)/() (,b (9)/()   3 ()/() 4)/(2) (,3 (9)/())/(2)
2  2
Zatem
11
, b (9)/()  (9)/() , (9)/() ,
(()/() a)/()
2 2 2 2
a stąd a 10 i b9.
Szukany okrąg ma równanie x10^2 y9^2 153.
Uwaga.
2y^2
Zdający może z równania prostej wyznaczyć x 10 y i wtedy otrzyma  (18y280)/(x10y) .

II sposób
Wyznaczamy współrzędne środka okręgu oraz obliczamy promień tego okręgu,
doprowadzając równanie okręgu do postaci x4^2 y3^2 17.
Stąd odczytujemy, że środkiem okręgu jest punkt P 4,3 , a promień okręgu jest równy r  17 .
x^2 8x6y8 0
Obliczamy współrzędne punktów K i L rozwiązując układ równań: (y)/(y10x)

2 2

x 8x6 10  x8 0
 (10x)/(y10x)

x^2
 (11x240)`},"MMAP-R0-100-2005-n13":{max:4,solution:`I sposób
Rozważamy trzy przypadki.
 I. Pierwszą cyfrą rozpatrywanej liczby jest 1. Wtedy na następnych sześciu miejscach
znajdują się dokładnie dwie cyfry 1, dokładnie dwie cyfry 2 i dokładnie dwie cyfry
ze zbioru {0,3,4,5,6,7,8,9}. Takich liczb istnieje
((6 4)/())/() 8^2 15 6 64  5760.
  
2 2
   
 II. Pierwszą cyfrą rozpatrywanej jest 2. Wtedy na następnych sześciu miejscach
znajdują się dokładnie trzy cyfry 1, dokładnie jedna cyfra 2 i dokładnie dwie cyfry ze
zbioru {0,3,4,5,6,7,8,9}. Takich liczb istnieje
((6 3)/())/() 8^2  20 3 64  3840.
  
3 1
   
 III. Pierwsza cyfra rozpatrywanej liczby jest różna od 1 i od 2. Pierwsza cyfra jest też
różna od 0. Zatem na pierwszym miejscu stoi jedna z siedmiu cyfr ze zbioru
{3,4,5,6,7,8,9}. Wtedy na następnych sześciu miejscach znajdują się dokładnie trzy
cyfry 1, dokładnie dwie cyfry 2 i dokładnie jedna cyfra ze zbioru {0,3,4,5,6,7,8,9}. Takich
liczb istnieje
6 3
7  87 20 3 8   3360.
   
3 2
   
Łącznie istnieje zatem 5760+3840+3360=12960 rozważanych liczb.
Istnieje 12960 siedmiocyfrowych liczb naturalnych, w których zapisie dziesiętnym występują
dokładnie trzy cyfry 1 i dokładnie dwie cyfry 2.
II sposób
Zliczamy wszystkie „liczby” siedmiocyfrowe, w których zapisie dziesiętnym występują
dokładnie: trzy cyfry 1, dokładnie dwie cyfry 2 i dokładnie dwie cyfry ze zbioru {0,3,4,5,6,7,8,9}.
Wtedy na siedmiu miejscach znajdują się dokładnie trzy cyfry 1, dokładnie dwie cyfry 2 i
dokł`},"MMAP-R0-100-2005-n14":{max:6,solution:`S
H
D
C
r r
O
Ponieważ w tym ostrosłupie wszystkie ściany boczne nachylone są do podstawy pod tym
samym kątem, więc spodek O wysokości H ostrosłupa jest środkiem okręgu wpisanego
w wielokąt będący podstawą ostrosłupa. Niech r oznacza promień okręgu wpisanego
w podstawę, h – wysokość trapezu ABCD, H natomiast niech oznacza wysokość
ostrosłupa.
D C
h
A B
E
Ponieważ w trapez można wpisać okrąg, więc spełniony jest warunek: AB  CD 26.
Korzystając z własności trójkąta prostokątnego EBC o kątach30, 60, 90, otrzymujemy:
h CE 8, a stąd wynika, że r  4.
Ponieważ tg  9/2 , więc 9/2  H/r i stąd obliczamy H 18.
Objętość tego ostrosłupa jest zatem równa
1 1 AB  CD 1 26
V  P H   h H   8 18  624.
ABCD
3 3 2 3 2`,levels:[{points:6,alts:["Zdający obliczy objętość ostrosłupa: V 624."]},{points:5,alts:[]},{points:4,alts:["Zdający obliczy wysokość ostrosłupa H 18i pole jego podstawy: P 104 ABCD"]},{points:3,alts:[" zapisze, że spodek wysokości ostrosłupa jest środkiem okręgu wpisanego w trapez ABCD lub z rozwiązania wynika, że zdający tę własność stosuje, np.: zapisze AB  CD 1016oraz obliczy wysokość tego ostrosłupa H 18"," obliczy pole podstawy tego ostrosłupa: P 104 ABCD"]},{points:2,alts:[" zapisze, że spodek wysokości ostrosłupa jest środkiem okręgu wpisanego w trapez ABCD lub z rozwiązania wynika, że zdający tę własność stosuje, np.: zapisze AB  CD 1016 i obliczy wysokość trapezu ABCD:h CE 8"," obliczy wysokość trapezu ABCD: h CE 8i wysokość tego ostrosłupa H 18"]},{points:1,alts:[" zapisze, że spodek wysokości ostrosłupa jest środkiem okręgu wpisanego w trapez ABCD lub z rozwiązania wynika, że zdający tę własność stosuje, np.: zapisze AB  CD 1016"," obliczy wysokość trapezu ABCD:h CE 8"]}]},"MMAP-R0-100-2005-n15":{max:7,solution:`I sposób
Oznaczmy długości boków ekranu smartfona literami x i y (x>y) tak jak na rysunku:
5 mm
y
3 mm 3 mm
x x
y
5 mm
Wtedy powierzchnia ekranu jest równa (w mm^2 ):
xy  6000,
skąd wynika, że
y  6000/x .
Powierzchnia całego smartfona (tj. ekranu z obramowaniem) jest równa
P x10y6  xy6x10y60  60006x10y60 6x^60000 6060.
x
Ponieważ x10  y6  0 , to x4  6000/x . Stąd otrzymujemy kolejno:
x^2 4x  6000,
x^2 4x4  6004,
x2^2  6004 ,
x2  2 1501,
x  2 15012.
Otrzymaliśmy funkcję P zmiennej x określoną wzorem
P x   6x^60000 6060 dla x 2 15012, .
 
x
Obliczamy pochodną funkcji P:
6x^2 10000
Px 6^60000  dla x 2 15012, .
 
x^2 x^2
Miejscem zerowym pochodnej funkcji P jest x 100, gdyż
2 150122 152122 39 276100 .
Ponadto Px0 dla x 2 15012,100 oraz Px0 dla x100, .
 
Zatem w przedziale 2 15012,100 funkcja P jest malejąca, a w przedziale 100,
funkcja P jest rosnąca.
Stąd wynika, że funkcja P dla x 100 przyjmuje najmniejszą wartość. Wtedy y  60.
Poszukiwanymi wymiarami ekranu smartfona są: x 100 mm, y  60 mm.
II sposób
Tak jak w sposobie pierwszym obliczamy w milimetrach kwadratowych powierzchnię ekranu:
P  60606x10 .y
Korzystamy z nierówności między średnią arytmetyczną i geometryczną:
(6x10y)/2  6x10y  60xy  60 6000  6^2 10000  6 100  600.
Stąd wynika, że
P  60606x10y  60601200  7260.
W nierówności między średnimi równość ma miejsce wtedy i tylko wtedy, gdy wszystkie liczby
w`},"MMAP-R0-100-2205-n6":{max:3,solution:`Sposób 1. (różnica sześcianów)
Przekształcamy równoważnie nierówność 7x^3 + 4x^2 y ≥ y^3 + 2xy^2 − x^3 , korzystając ze
wzoru skróconego mnożenia na różnicę sześcianów:
8x^3 − y^3 + 4x^2 y − 2xy^2 ≥ 0
(2x − y)(4x^2 + 2xy + y^2 ) + 4x^2 y − 2xy^2 ≥ 0
(2x − y)(4x^2 + 2xy + y^2 ) + 2xy(2x − y) ≥ 0
(2x − y)(4x^2 + 4xy + y^2 ) ≥ 0
Korzystamy ze wzoru skróconego mnożenia na kwadrat sumy i otrzymujemy
(2x − y)(2x + y)^2 ≥ 0
Z założenia 2x > y, więc (2x − y) > 0.
Kwadrat każdej liczby rzeczywistej jest liczba nieujemną, więc (2x + y)^2 ≥ 0.
Zatem wyrażenie (2x − y)(2x + y)^2 jest nieujemne jako iloczyn liczby dodatniej
i nieujemnej, więc nierówność (2x − y)(2x + y)^2 ≥ 0 jest prawdziwa. To oznacza, że
nierówność 7x^3 + 4x^2 y ≥ y^3 + 2xy^2 − x^3 jest także prawdziwa.
Sposób 2. (sześcian różnicy)
Przekształcamy nierówność 7x^3 + 4x^2 y ≥ y^3 + 2xy^2 − x^3 do postaci
8x^3 − y^3 − 2xy^2 + 4x^2 y ≥ 0
Ponieważ (2x − y)^3 = 8x^3 − y^3 − 12x^2 y + 6xy^2 , więc otrzymujemy
8x^3 − y^3 − 12x^2 y + 6xy^2 + 16x^2 y − 8xy^2 ≥ 0
(2x − y)^3 + 16x^2 y − 8xy^2 ≥ 0
(2x − y)^3 + 8xy(2x − y) ≥ 0
(2x − y)[(2x − y)^2 + 8xy] ≥ 0
(2x − y)(4x^2 − 4xy + y^2 + 8xy) ≥ 0
(2x − y)(2x + y)^2 ≥ 0
Z założenia 2x > y, więc (2x − y) > 0.
Kwadrat każdej liczby rzeczywistej jest liczba nieujemną, więc (2x + y)^2 ≥ 0.
Zatem wyrażenie (2x − y)(2x + y)^2 jest nieujemne jako iloczyn liczby dodatniej
i nieujemnej, więc nierówność (2x − y)(2x + y)^2 ≥ 0 jest prawdziwa. To oznacza, że
nierówność 7x^3 + 4x^2 y ≥ y^3 + 2xy^2 − x`,levels:[{points:3,alts:["gdy przeprowadzi pełne rozumowanie – zdający musi spełnić warunek określony w zasadach oceniania za 2 punkty oraz uzasadnić, że (2x − y) > 0, powołując się na założenie, oraz zapisać, że kwadrat każdej liczby rzeczywistej jest nieujemny."]},{points:2,alts:["gdy przekształci nierówność do postaci (2x − y)(2x + y)^2 ≥ 0."]},{points:1,alts:["zastosuje wzór na różnicę sześcianów i zapisze nierówność w postaci (2x − y)(4x^2 + 2xy + y^2 ) + 2xy(2x − y) ≥ 0 lub (2x − y)(4x^2 + 2xy + y^2 ) ≥ −2xy(2x − y)","zastosuje wzór na sześcian różnicy i zapisze nierówność w postaci (2x − y)^3 + 8xy(2x − y) ≥ 0 lub (2x − y)^3 ≥ −8xy(2x − y)","przekształci nierówność do postaci 2x(4x^2 − y^2 ) + y(4x^2 − y^2 ) ≥ 0 lub 2x(4x^2 − y^2 ) ≥ −y(4x^2 − y^2 ), lub 4x^2 (2x + y) − y^2 (2x + y) ≥ 0, lub 4x^2 (2x + y) ≥ y^2 (2x + y)."]}]},"MMAP-R0-100-2205-n15":{max:7,solution:`Sposób 1.
a)
Przyjmujemy następujące oznaczenia:
a – długość podstawy trójkąta,
b – długość ramienia trójkąta,
h – wysokość trójkąta.
Obwód trójkąta jest równy 18, więc a + 2b = 18 i stąd a = 18 − 2b.
Z geometrycznych warunków zadania wynika, że a ∈ (0,+∞) oraz b ∈ (0,+∞), więc
18 − 2b > 0, zatem b ∈ (0,9).
Korzystając z twierdzenia Pitagorasa i związku a = 18 − 2b, otrzymujemy
2
h^2 = b (2 1/(−())/2 a)
2
h^2 = b (2 1/(−())/2 (18 − 2b))
h^2 = b^2 − (9 − b)^2
h^2 = 18b − 81
h = √18b − 81
Musi zachodzić 18b − 81 > 0, więc b > 81/18 . Zatem
((b∈( 9/2 ,9).)/(ah))/(P=)
Pole trójkąta o podstawie a i wysokości h jest równe .
2
Zapisujemy pole trójkąta jako funkcję P zmiennej b:
P(b) = ((18−2b)⋅√18b−81)/2 dla b ∈ ( 9/2 ,9)
b)
Z geometrycznych warunków zadania wynika, że a ∈ (0,+∞) oraz b ∈ (0,+∞), więc
18 − 2b > 0, zatem b ∈ (0,9).
Z warunku trójkąta 2b > a , czyli 2b > 18 − 2b, więc b > 9/2 . Zatem b ∈ ( 9/2 ,9).
Dziedziną tej funkcji jest przedział ( 9/2 ,9).
c)
Przekształcamy wzór funkcji P:
(18b − 81)
P(b) = ((18−2b)⋅√18b−81)/2 = (√(18−2b))/2
Tworzymy funkcję pomocniczą f określoną wzorem
9
f(b) = (18 − 2b)^2 (18b − 81) dla b ∈ ( ,9).
2
Wyznaczamy pochodną funkcji f:
′
f (b) = (−72 + 8b)(18b − 81) + (324 − 72b + 4b^2 ) ∙ 18 = 216b^2 − 3240b + 11664
Obliczamy miejsce zerowe pochodnej funkcji f:
′
f (b) = 0
216b^2 − 3240b + 11664 = 0 i (9/(b∈())/2 ,9)
9
b^2 − 15b + 54 = 0 i b ∈ ( ,9)
2
b = 6
9
′ ′
Ponieważ f (b) > 0 b ∈ ( ,6) oraz f (b) < 0 dla b ∈ (6,9), więc funkcja f jest
2
(dla`},"MPOP-P1-P2-2203-nA1-2":{max:1,levels:[{points:1,alts:["poprawne rozstrzygnięcie wraz z uzasadnieniem."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-3":{max:1,levels:[{points:1,alts:["poprawne wyjaśnienie."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-4":{max:2,levels:[{points:2,alts:["odpowiedź poprawna odnosząca się do obu tekstów."]},{points:1,alts:["odpowiedź poprawna odnosząca się do jednego tekstu."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-5":{max:1,levels:[{points:1,alts:["odpowiedź poprawna."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-7":{max:2,levels:[{points:1,alts:["poprawne wyjaśnienie.","poprawne rozstrzygnięcie i uzasadnienie."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi.","odpowiedź niepełna, niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-8":{max:1,levels:[{points:1,alts:["poprawne wyjaśnienie dramatu światopoglądowego w trenie X."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-9":{max:2,levels:[{points:2,alts:["rozstrzygnięcie wraz z uzasadnieniem odwołującym się do opinii Piszczkowskiego oraz satyry."]},{points:1,alts:["rozstrzygnięcie wraz z uzasadnieniem odwołującym się do opinii Piszczkowskiego ALBO satyry."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-10":{max:2,levels:[{points:1,alts:["poprawne rozstrzygnięcie i uzasadnienie, odnoszące się do obu utworów.","poprawne uzupełnienie tabeli: wypisanie z każdego utworu po jednym przykładzie właściwego środka językowego i podanie nazwy tego środka."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi.","odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-11":{max:2,levels:[{points:2,alts:["rozstrzygnięcie wraz z przytoczeniem dwóch przykładów z dramatu."]},{points:1,alts:["rozstrzygnięcie wraz z przytoczeniem jednego przykładu z dramatu."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-12":{max:1,levels:[{points:1,alts:["odpowiedź poprawna."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-14":{max:1,levels:[{points:1,alts:["poprawne wypisanie dwóch zdrobnień z tekstu oraz określenie kontrastu jako ich funkcji."]},{points:0,alts:["odpowiedź niepełna lub niepoprawna albo brak odpowiedzi."]}]},"MPOP-P1-P2-2203-nA1-16":{max:2,levels:[{points:2,alts:["poprawna interpretacja plakatu z uwzględnieniem dwóch elementów graficznych wyrażających przesłanie Tanga."]},{points:1,alts:["poprawna interpretacja plakatu z uwzględnieniem jednego elementu graficznego wyrażającego przesłanie Tanga."]},{points:0,alts:["odpowiedź niepoprawna albo brak odpowiedzi."]}]}};export{n as default};
