const Mock=require('mockjs')

Mock.mock('/shouye','get',require('./json/shouye.json'));
Mock.mock('/sousuo','get',require('./json/sousuo.json'));
Mock.mock('/dianying','get',require('./json/dianying.json'));
Mock.mock('/tushu','get',require('./json/tushu.json'));
Mock.mock('/xiaozu','get',require('./json/xiaozu.json'));
Mock.mock('/all','get',require('./json/all.json'));