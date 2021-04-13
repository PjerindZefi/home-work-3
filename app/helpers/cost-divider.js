import { helper } from '@ember/component/helper';

export default helper(function costDivider(params) {
    let [rows, ArrayFriends] = params;
    var totalExpense = 0;
    var numOfFriends = ArrayFriends.length;
    var eachPersonPay = 0;
    var totalPersonPaid = 0;
    var owedMoney = 0;
    var aResult = {};

    var ClassifyResult = [];

    for (var i = 0; i < rows.length; i++) {
        totalExpense += rows[i]['expense'];
    }
    eachPersonPay = Math.round((totalExpense / numOfFriends + Number.EPSILON) * 100) / 100

    for (var k = 0; k < numOfFriends; k++) {
        for (var j = 0; j < rows.length; j++) {
            if (rows[j]['paidBy'] == ArrayFriends[k])
                totalPersonPaid += rows[j]['expense'];
            owedMoney = totalPersonPaid - eachPersonPay;
        }
        aResult.name = ArrayFriends[k];
        aResult.owedMoney = Math.round((owedMoney + Number.EPSILON) * 100) / 100;
        aResult.currOwedMoney = Math.round((owedMoney + Number.EPSILON) * 100) / 100;
        aResult.transaction = [];
        ClassifyResult.push(aResult);

        totalPersonPaid = 0;
        owedMoney = 0;
        aResult = {};
        ClassifyResult.sort((a, b) => parseFloat(a.owedMoney) - parseFloat(b.owedMoney));
        console.log(ClassifyResult);
    }

    //Two pointers
    var a = 0;
    var b = ClassifyResult.length - 1;
    while (a < b) {
        if (Math.abs(ClassifyResult[a].currOwedMoney) >= Math.abs(ClassifyResult[b].currOwedMoney)) {
            ClassifyResult[a].currOwedMoney += ClassifyResult[b].currOwedMoney;
            ClassifyResult[a].transaction.push({ id: ClassifyResult[b].name, credit: -ClassifyResult[b].currOwedMoney });
            ClassifyResult[b].transaction.push({ id: ClassifyResult[a].name, credit: ClassifyResult[b].currOwedMoney });
            ClassifyResult[b].currOwedMoney = 0;
        } else {
            ClassifyResult[b].currOwedMoney -= Math.abs(ClassifyResult[a].currOwedMoney);
            ClassifyResult[a].transaction.push({ id: ClassifyResult[b].name, credit: ClassifyResult[a].currOwedMoney });
            ClassifyResult[b].transaction.push({ id: ClassifyResult[a].name, credit: Math.abs(ClassifyResult[a].currOwedMoney) });
            ClassifyResult[a].currOwedMoney = 0;
        }

        if (ClassifyResult[a].currOwedMoney == 0) {
            a++;
        }

        if (ClassifyResult[b].currOwedMoney == 0) {
            b--;
        }

    } //end while

    console.log(ClassifyResult);

    return ClassifyResult;
});