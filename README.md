# PLAYWRIGHT

## instalacja
- zainstalowac VS Code https://code.visualstudio.com/
- w VSC, menu > terminal > new terminal, wykonac komende `node -v`, jak wyswietla wersje to jest OK
jak nie ma node, to zainstalowac z https://nodejs.org/en/ wersje LTS, potem restart VSC i znowu sprawdzic wersje
- w VSC, w konsoli, `npm init playwright@latest` - sciaga paczke playwright w najnowszej wersji

## nazwy
- npm - node package manager
- npx - node package executor

## podstawowe komendy
- `npx playwright codegen https://demo-bank.vercel.app/` - odpala nagrywarke na wskazanej stronie, adresu strony nie trzeba podawac
- `npx playwright test` - uruchamia wszystkie testy bez GUI przegladarki
- `npx playwright show-report` - pokazuje raport HTML z ostatniego uruchomienia
- `npx playwright test --headed` - odpala testy w trybie headed (z GUI przegladarki), bez wzgledu na konfiguracje w pliku playwright.config.ts

## asercje
- `await expect(page).toHaveTitle('eluwina');` - asercja na tytul z timeoutem z configa
- `await expect(page).toHaveTitle('eluwina', {timeout: 1 * 1000});` - nadpisuje timeout zdefiniowany w playwright.config.ts (nie timeout a expect.timeout)
- expect ma defaultowo 5_000 ms timeout, mozna to nadpisac w pliku konfiguracyjnym: { expect: { timeout: 1_000 } }

## inne
- `test.describe('some group name', () =>{});` - grupowanie testow
- `npx playwright test login.spec.ts:18` - uruchamia test z konkretnego pliku z konkretnej linijki
- jak zamienimy `test` na `test.only` to komenda `npx playwright test` uruchomi nam tylko ten jeden test. Mozemy to dodac do wiekszej ilosci testow, wtedy odpali wszystkie z `test.only`
- metoda `fill()` ma juz wbudowany click, wiec nie trzeba klikac w element przed wpisywaniem wartosci, wiec to co nam generuje codegen ma niepotrzebny click

# VISUAL STUDIO

## SKRÓTY KLAWISZOWE
- `CTRL + J` - pokazuje/ukrywa dolne okna
- `` CTRL + ` `` - pokazuje/ukrywa terminal z focusem na pisanie w nim (\` - backtick)
- `CTRL + /` - comment/uncomment line
- `ALT + SHIFT + F` - format document (or RMC > Format Document)
- `CTRL + ,` - setting

## FAJNE RZECZY
- PPM na pliku > Open Timeline - lokalna historia zmian w pliku! mozna porownywac z poprzednia wersja czy z aktualna
- w timeline jak nam pokazuje roznice to mozna przerzucac zmiany z jednego porownania na drugie

# GDZIE SKONCZYLEM 
https://jaktestowac.pl/lesson/pw1s01l05/ - poczatek