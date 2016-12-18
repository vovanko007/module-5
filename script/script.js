var out = ''

function print(data) {
    out += '<h2>' + data + '</h2>';
    document.getElementById('out').innerHTML = out;
}

(function launch() {
    task1();
})()

/*
 * Завдання № 1
 * Напишіть код, який би порівняв рядки:
 * 1. "12" > "8",
 * 2. "Світло" > "Світ",
 * 3. "Яблуко" < "Яблуня"
 * 4. "Море" > "Морське"
 *
 */
function task1() {
    print("TASK #1");
    var indent = '&nbsp &nbsp';
    print("1." + indent + "'12' > '8' = " + ('12' > '8')); // false: '1' < '8'
    print("2." + indent + "Світло > Світ = " + ('Світло' > 'Світ')); // true: 'Л' > ''
    print("3." + indent + "Яблуко < Яблуня = " + ('Яблуко' < 'Яблуня')); // true: 'к' < 'н'
    print("4." + indent + "Море > Морське = " + ('Море' > 'Морське')); //false: 'е' < 'с'
}