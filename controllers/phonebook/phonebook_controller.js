exports.add_group = function(req, res) {
    res.render('pages/add_group',{title : "Add Group"});
};
exports.add_contacts = function(req, res) {
    res.render('pages/add_contacts',{title : "Add Contacts"});
};
exports.manage_group = function(req, res) {
    res.render('pages/manage_group',{title : "Manage Group"});
};
exports.manage_contacts = function(req, res) {
    res.render('pages/manage_contacts',{title : "Manage Contacts"});
};
exports.test_numbers = function(req, res) {
    res.render('pages/test_numbers',{title : "Test Numbers"});
};
exports.blacklist_numbers = function(req, res) {
    res.render('pages/blacklist_numbers',{title : "Blacklist Numbers"});
};
exports.contactList = function(req, res) {
    res.json({
        "Result": "OK",
        "Records": [
            {
                "PhoneId": 25,
                "StudentId": 8,
                "PhoneType": 1,
                "Number": "8141480938",
                "PersonName": "Name 1"
            },
            {
                "PhoneId": 26,
                "StudentId": 8,
                "PhoneType": 1,
                "Number": "0897743698",
                "PersonName": "Name 2"
            },
            {
                "PhoneId": 27,
                "StudentId": 8,
                "PhoneType": 3,
                "Number": "8517921202",
                "PersonName": "Name 3"
            }
        ],
        "TotalRecordCount": 128
    });
};
exports.list_group = function(req, res) {
    res.json({
        "Result": "OK",
        "Records": [
            {
                "StudentId": 8,
                "ContinentalId": 4,
                "CountryId": 1,
                "CityId": 1,
                "Name": "Agatha Anar",
                "EmailAddress": "agatha.anar@jtable.org",
                "Password": "123",
                "Gender": "F",
                "BirthDate": "/Date(-931921200000)/",
                "About": "",
                "Education": 1,
                "IsActive": true,
                "RecordDate": "/Date(1536008400000)/"
            },
            {
                "StudentId": 117,
                "ContinentalId": 5,
                "CountryId": 21,
                "CityId": 62,
                "Name": "Agatha Nolan",
                "EmailAddress": "agatha.nolan@jtable.org",
                "Password": "123",
                "Gender": "F",
                "BirthDate": "/Date(-927169200000)/",
                "About": "",
                "Education": 3,
                "IsActive": true,
                "RecordDate": "/Date(1544216400000)/"
            },
            {
                "StudentId": 66,
                "ContinentalId": 2,
                "CountryId": 2,
                "CityId": 6,
                "Name": "Agatha Wayne",
                "EmailAddress": "agatha.wayne@jtable.org",
                "Password": "123",
                "Gender": "F",
                "BirthDate": "/Date(1263333600000)/",
                "About": "",
                "Education": 3,
                "IsActive": true,
                "RecordDate": "/Date(1488315600000)/"
            },
            {
                "StudentId": 10,
                "ContinentalId": 1,
                "CountryId": 5,
                "CityId": 19,
                "Name": "Albert Asimov",
                "EmailAddress": "albert.asimov@jtable.org",
                "Password": "123",
                "Gender": "M",
                "BirthDate": "/Date(147474000000)/",
                "About": "",
                "Education": 2,
                "IsActive": true,
                "RecordDate": "/Date(1531688400000)/"
            },
            {
                "StudentId": 120,
                "ContinentalId": 1,
                "CountryId": 7,
                "CityId": 28,
                "Name": "Albert Kafka",
                "EmailAddress": "albert.kafka@jtable.org",
                "Password": "123",
                "Gender": "M",
                "BirthDate": "/Date(1273525200000)/",
                "About": "",
                "Education": 1,
                "IsActive": false,
                "RecordDate": "/Date(1540328400000)/"
            },
            {
                "StudentId": 85,
                "ContinentalId": 2,
                "CountryId": 6,
                "CityId": 22,
                "Name": "Albert Orwell",
                "EmailAddress": "albert.orwell@jtable.org",
                "Password": "123",
                "Gender": "M",
                "BirthDate": "/Date(1163196000000)/",
                "About": "",
                "Education": 1,
                "IsActive": true,
                "RecordDate": "/Date(1536872400000)/"
            },
            {
                "StudentId": 74,
                "ContinentalId": 1,
                "CountryId": 5,
                "CityId": 17,
                "Name": "Aldous Winnfield",
                "EmailAddress": "aldous.winnfield@jtable.org",
                "Password": "123",
                "Gender": "F",
                "BirthDate": "/Date(-610945200000)/",
                "About": "",
                "Education": 2,
                "IsActive": true,
                "RecordDate": "/Date(1513544400000)/"
            },
            {
                "StudentId": 43,
                "ContinentalId": 1,
                "CountryId": 5,
                "CityId": 18,
                "Name": "Andrew Clayton",
                "EmailAddress": "andrew.clayton@jtable.org",
                "Password": "123",
                "Gender": "M",
                "BirthDate": "/Date(836514000000)/",
                "About": "",
                "Education": 2,
                "IsActive": false,
                "RecordDate": "/Date(1529442000000)/"
            },
            {
                "StudentId": 16,
                "ContinentalId": 2,
                "CountryId": 16,
                "CityId": 51,
                "Name": "Andy Tarantino",
                "EmailAddress": "andy.tarantino@jtable.org",
                "Password": "123",
                "Gender": "M",
                "BirthDate": "/Date(1241298000000)/",
                "About": "",
                "Education": 3,
                "IsActive": true,
                "RecordDate": "/Date(1499720400000)/"
            },
            {
                "StudentId": 11,
                "ContinentalId": 1,
                "CountryId": 22,
                "CityId": 64,
                "Name": "Antonio Brown",
                "EmailAddress": "antonio.brown@jtable.org",
                "Password": "123",
                "Gender": "M",
                "BirthDate": "/Date(720828000000)/",
                "About": "",
                "Education": 1,
                "IsActive": true,
                "RecordDate": "/Date(1492117200000)/"
            }
        ],
        "TotalRecordCount": 128
    });
};

