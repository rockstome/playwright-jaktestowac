# PLAYWRIGHT

## instalacja

- zainstalowac VS Code https://code.visualstudio.com/
- w VSC, menu > terminal > new terminal, wykonac komende `node -v`, jak wyswietla wersje to jest OK. Jak nie ma node, to zainstalowac z https://nodejs.org/en/ wersje LTS, potem restart VSC i znowu sprawdzic wersje
- w VSC, w konsoli, `npm init playwright@latest` - sciaga paczke playwright w najnowszej wersji
- po sciagnieciu innego projektu node `npm install`

## nazwy

- npm - node package manager
- npx - node package executor

## podstawowe komendy

- `npx playwright codegen https://demo-bank.vercel.app/` - odpala nagrywarke na wskazanej stronie, adresu strony nie trzeba podawac
- `npx playwright test` - uruchamia wszystkie testy bez GUI przegladarki
- `npx playwright show-report` - pokazuje raport HTML z ostatniego uruchomienia
- `npx playwright test --headed` - odpala testy w trybie headed (z GUI przegladarki), bez wzgledu na konfiguracje w pliku playwright.config.ts
- `npx playwright install` - zainstaluje nam przegladarki jak nam brakuje
- `npm install @playwright/test@latest` - update do najnowszej wersji. Mozna tez w package.json wpisac z palca wersje i pozniej w terminalu `npm install`

## asercje

- `await expect(page).toHaveTitle('eluwina');` - asercja na tytul z timeoutem z configa
- `await expect(page).toHaveTitle('eluwina', {timeout: 1 * 1000});` - nadpisuje timeout zdefiniowany w playwright.config.ts (nie timeout a expect.timeout)
- expect ma defaultowo 5_000 ms timeout, mozna to nadpisac w pliku konfiguracyjnym: { expect: { timeout: 1_000 } }

## trace viewer

- można powiekszyc strone i tam normalnie badac sobie DOM, pisac lokatory etc.

## inne

- `test.describe('some group name', () =>{});` - grupowanie testow
- `npx playwright test login.spec.ts:18` - uruchamia test z konkretnego pliku z konkretnej linijki
- jak zamienimy `test` na `test.only` to komenda `npx playwright test` uruchomi nam tylko ten jeden test. Mozemy to dodac do wiekszej ilosci testow, wtedy odpali wszystkie z `test.only`
- metoda `fill()` ma juz wbudowany click, wiec nie trzeba klikac w element przed wpisywaniem wartosci, wiec to co nam generuje codegen ma niepotrzebny click

# TYPESCRIPT

- aby korzystac ze string interpolation zamieniamy ' na \` w stringu i uzywamy placeholdera \$\{\}, czyli 'name: Tomasz' zmianimy na \`name: ${someVariable}\`
- mozna uniknac typowania, deklarujac zmienna bez typu `let guess; guess = "pink"; guess = 23;` (to nie do konca prawda, typescript zaklada type any dla zmiennej guess)
- jak chcemy wymusic typowanie to uzuywamy type annotation `let someVariable: string`
- (javascript) jak mamy funkcje z 1 parametrem, a wywolamy ja bez parametru, to zostanie przekazany undefined. aby w typescript oznaczyc parametr jako opcjonalny dodajemy znak `?` po nazwie zmiennej, przykladowo `function printValue(someValue?: string)`
- documentation comment: zaczynamy pisac `/**`
- krotka / tuple `let examAnswers: [boolean, string] = [true, 'some string'];`
- `let examAnswers= [true, false, false];` czy to tablica `boolean[]` czy krotka `[boolean, boolean, boolean]`? Less restrictive type, czyli tablica
- `let ordersArrayTS: [Pet, number][]` - tablica krotek
- `enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }` - string enum. wybierac string enum na rzecz numeric enum (jeden z argumento jest taki ze nie przypiszemy stringa do string enum, a mozemy przypisac number do numeric enum)
- `type Person = { name: string, age: number }; let aCompany: {companyName: string, boss: Person, employees: Person[]};` - type alias, wygodne zeby nie duplikowac kodu. alias to tylko nazwa dla typu, jak typy sie zgadzaja to mozemy do zmiennej z aliasem przypisac wartosc zmiennej z innym aliasem, czyli `type s1 = string; type s2 = string; let v1: s1 = 'test'; let v2: s2 = v1;`
- `type OperatorFunction = (n1:number, n2:number) => number;` - function type
- `type Family<T> = {parents: [T, T], mate: T, children: T[]};` - generic type
- A type guard is a conditional that checks if a variable is a certain type: `if (typeof margin === 'string') {/*some code*/}`
- `let val: string | number` - type union, kazdy typ w uni nazywa sie type member
- `function printMe(value: string | number): void {if (typeof value === 'string') value.toUpperCase();else value.toFixed(2);}` - dzieki typeguard mamy dostep do metod konkretnego typu (type narrowing)
- Array union - `(string | number)[]` - tablica ktora przyjmuje zmienne typu string lub number
- `type Color = 'green' | 'yellow' | 'red';` - union with literal types, taki type alias jest wygodny zeby go uzywac jako parametr metody. wtedy taka metoda moze przyjmowac tylko zdefiniowane wartosci!
- `if ('length' in var) {...}` - type guard sprawdzajacy czy zmienna var ma property lenght
- `interface Developer extends Human` - kopiowanie type membersow z jednego interfejsu do drugiego. klasa ktora bedzie implementowac interfejs Developer bedzie tez musiala implementowac metody interfejsu Human
- `interface OptionsType { name: string; size?: string;}` - prop size jest optional type member
- `[propertyName: string]: string` - index signature
- string, number, boolean, bigint, null, undefined, symbol - primitives in JS (to ze typeof null zwraca object to bug w js ;-)
- `const name: 'Bob'` - typescript pokazuje ze typ to 'Bob', ta stala moze miec tylko taka wartosc, nazywa sie to string literal type

# VISUAL STUDIO

## skróty klawiszowe

- `CTRL + J` - pokazuje/ukrywa dolne okna
- `` CTRL + ` `` - pokazuje/ukrywa terminal z focusem na pisanie w nim (\` - backtick)
- `CTRL + /` - comment/uncomment line
- `ALT + SHIFT + F` - format document (or RMC > Format Document)
- `CTRL + ,` - setting
- `ALT + SHIFT + ↓` lub `ALT + SHIFT + ↑` - duplikuje aktualna linijke
- `F2` - rename
- `CTRL + SHIFT + R` - refactor

## terminal

- `code .` - otwiera aktualny folder w nowej instancji VS code

## inne

- PPM na pliku > Open Timeline - lokalna historia zmian w pliku! mozna porownywac z poprzednia wersja czy z aktualna
- w timeline jak nam pokazuje roznice to mozna przerzucac zmiany z jednego porownania na drugie
- jak wkleimy sciezke pliku (przykladowo skopiowana z trace viewera) w wyszukiwarke to bardzo latwo mozemy ten plik otworzyc do edycji

# TUTORIALE

https://jaktestowac.pl/lesson/pw1s02l07/ : 29:00
https://learntypescript.dev/02/l3-type-inference

# pytania / problemy

jaka jest roznica miedzy extension prettier a package prettier?
czy filtorwanie w raporcie html dziala (mntt-1234, mntt-1235 etc.)

# MINDBLOW

- https://fluffy-fiesta-97qw7xw5g4g27p4x.github.dev/ i uruchamianie testow w chmurze
- LIVE SHARE!

# zglosic

- jak zaznaczam kika testow i chce je uruchomic to odpalaja sie wszystkie w calym pliku/describe (to jescze do zbadania co sie dokaldnie dzieje). zobaczyc czy poza loopem tez sie to dzieje ze nie mozna puscic tylko 2
