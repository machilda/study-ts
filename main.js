var addTax = function (price, tax) {
    if (tax === void 0) { tax = 10; }
    return Math.round(price * (1 + tax / 100));
};
var Address = /** @class */ (function () {
    function Address(_zip) {
        this._zip = _zip;
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
    Object.defineProperty(Address.prototype, "zip", {
        get: function () {
            return this._zip;
        },
        set: function (value) {
            this._zip = value;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.getAddress = function () {
        var here = this.addresses[this.zip];
        return here.prefecture + " " + here.city;
    };
    return Address;
}());
var address = new Address('079-1100');
console.log(address.getAddress());
var xhr = new XMLHttpRequest();
xhr.open('GET', 'zip.json', true);
xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send(null);
