
const addTax = (price:number, tax:number = 10):number =>{
    return Math.round(price * (1+tax / 100))
}

class Address   {
    readonly addresses: any;
    public constructor(private _zip: string) {
        this.addresses =
        {
            '079-1100': {
                'prefecture': '北海道',
                'city': '赤平市'
            },
            '038-0000': {
                'prefecture': '青森県',
                'city': '青森市'
            }
        };
    }
    get zip(): string {
        return this._zip;
    }
    set zip(value: string) {
        this._zip = value;
    }
    public getAddress(): string {
        let here = this.addresses[this.zip];
        return `${here.prefecture} ${here.city}`;
    }
 }

let address = new Address('079-1100')

console.log(address.getAddress());


let xhr = new XMLHttpRequest();
xhr.open('GET', 'zip.json', true);

xhr.onload = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
	  console.log(xhr.responseText);
  }
 }
 xhr.send(null);