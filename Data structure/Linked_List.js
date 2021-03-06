/**
 * @Linked_List դա @class որը ռեալիզացնում է @List և @Deque ինտերֆեյսերը։ Դա ապահովում է երկողմանի կապ էլեմենտների միջև(next & prev link)։
 *      Յուրաքանչյուր էլեմենտ( @node հանգույց) ունի հղում իր հաջորդի և նախորդի վրա։
 * @Սահմանում_2 : Դա հանգույցների շխթա է ․․․
 * @Link դա հղում է մեկ այլ @object -ի վրա կամ @null -ի եթե հաջորդ հանգույցը(node) չի հայտնաբերվել:
 * 
 * @Linked_List տարրերի հաջորդականություն է: Իր ամենապարզ տեսքով ցուցակը կարող է իրականացվել որպես զանգված: 
 *      Այնուամենայնիվ, «ցուցակ» տերմինը սովորաբար վերաբերում է կապված ցուցակին։
 *      Ի տարբերություն զանգվածի, կապված ցուցակում հաջորդական տարրերը հաջորդաբար դասավորված չեն ֆիզիկական հիշողության մեջ:
 * @Առանձին կապակցված ցուցակ, յուրաքանչյուր տարր պարունակում է ցուցիչի հաջորդ տարրի ցուցիչ:
 * @Կրկնակի կապված ցուցակ, յուրաքանչյուր տարր ունի երկու ցուցիչ. մեկ ցուցիչ հաջորդ տարրի և մեկ ցուցիչ նախորդի:
 * @Բազմապատկված ցուցակ, հանգույցում կարող է ներառվել ավելի քան երկու ցուցիչ։
 * @Շրջանաձեւ կապակցված ցուցակ, վերջին հանգույցը մատնանշում է առաջինը ՝ թույլ տալով ցուցակի անվերջ անցում:
 *      Այլ կերպ ասած, վերջինից հետո հաջորդ հանգույցը առաջինն է:
 * Ընդհանուր առմամբ, կապված ցուցակները ավելի ճկուն են, քան զանգվածները: Օրինակ, զանգվածի տարր տեղադրելը կարող է պահանջել, 
 * որ զանգվածի ամբողջ մասը կամ դրա մի մասը վերաշարադրվի հիշողության մեջ, սկսած տեղադրման վայրից: 
 * Ի հակադրություն, կապակցված ցուցակում հանգույց տեղադրելը պահանջում է, որ ստեղծվի միայն մեկ հանգույց,
 * և հարակից հանգույցների ցուցիչները թարմացվեն նոր հանգույցի գտնվելու վայրի հետ: 
 * Թերությունը այն է, որ կապված ցուցակները պահանջում են ավելի շատ համակարգի ռեսուրսներ:
 * Օրինակ, կապված ցուցակները պահանջում են կամ մեխանիկական կամ ավտոմատ GC(աղբահանություն)`«մաքրելու»(հասանելի դարձնելու) հիշողությունը,
 * որն այլևս չի օգտագործվում` հանգույցները ցուցակից հանվելուց հետո:
 * @LinkedListNode
 * @LinkedList
 * @SinglyList 
 * @prepend @append @delet @find @deleteTail '@deleteHead @fromArray @toArray
 */

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}