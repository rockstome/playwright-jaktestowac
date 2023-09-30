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

# GDZIE SKONCZYLEM

https://jaktestowac.pl/lesson/pw1s02l04/ - poczatek
https://www.codecademy.com/courses/learn-typescript/lessons/introduction-to-typescript/exercises/any

# pytania / problemy

jaka jest roznica miedzy extension prettier a package prettier?
czy filtorwanie w raporcie html dziala (mntt-1234, mntt-1235 etc.)
