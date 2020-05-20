import Mock from 'mockjs'
Mock.mock('/shopinfo',{
    "shopinfo|10":[
        {
            "key|+1":1,
            "name":"@csentence(4,6)",
            "rate|3-5.1-1":4,
            "orderamount|0-600":200,
            "pinpai|1":true,
            "srcofshop":"@Image()",
            "qisongjia|1":[10,20,50],
            "peisongfei|1":[1,3,5,10]

        }
    ]
});
Mock.mock('/assignedshopinfo',{
    "shopinfo":
        {
            
            "name":"@csentence(4,6)",
            "shopimg":"@image",
            "distance|500-2000":500,
            "discount":true,
            "discountinfo":"新用户下单即享立减10元",
            "rate|3-5.1-1":4,
            "orderamount|0-600":200,
            "pinpai|1":true,
            "srcofshop":"@Image()",
            "qisongjia|1":[10,20,50],
            "peisongfei|1":[1,3,5,10],
            "sorts|3-5":[
                {
                "keyofsort|+1":1,
                "sortname":"@cname",
                "foods|6-10":[{
                    "key|+1":1,
                    "name":"@csentence(2,6)",
                    "rate|80-100":95,
                    "foodimg":"@Image()",
                    "price|5-50":5,
                    "salesamount|0-100":5
                }]
            }
            ]

        }
    
})