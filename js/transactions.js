const transactions = [
	{ desc: 'ATM near Banashankari 2nd stage', amount: 1000, type: 'cr', date: '31-jan-2017' },
	{ desc: 'IMPS transfer to xyz', amount: 2000, type: 'dr', date: '31-jan-2017' },
	{ desc: 'Payment made at X-Restaurant', amount: 2500, type: 'dr', date: '30-jan-2017' },
	{ desc: 'ATM near Banashankari 2nd stage', amount: 2000, type: 'cr', date: '31-jan-2017' },
	{ desc: 'Payment made at Movies', amount: 1400, type: 'dr', date: '31-jan-2017' },
	{ desc: 'Payment made at X-Restaurant', amount: 1600, type: 'dr', date: '23-jan-2017' },
	{ desc: 'ATM near Banashankari 2nd stage', amount: 1200, type: 'cr', date: '30-jan-2017' },
	{ desc: 'IMPS transfer', amount: 3000, type: 'dr', date: '30-jan-2017' },
	{ desc: 'ATM near Banashankari 2nd stage', amount: 6000, type: 'cr', date: '28-jan-2017' },
]

var getDesc=(transactionsItem) => {
  											return transactionsItem.desc;
                   }
console.log("the descriptions are ",transactions.map(getDesc));


var getTransactionsWithTypeAndDate=(type,date)=>{
  																			return (item) => ((item.type==type) && (item.date==date));
                                        }
var getTransactionsCredit=getTransactionsWithTypeAndDate('cr','31-jan-2017');

var trans=transactions.filter(getTransactionsCredit);
console.log('the transactions are of type credit made on 31-jan-2017 are');
trans.forEach((item)=>console.log(item));

