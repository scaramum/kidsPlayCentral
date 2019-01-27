from datetime import datetime
from elasticsearch import Elasticsearch
es = Elasticsearch()
indexName= "kids-central-activities"
docType='activity'

doc = { 
    'activity': 'activityName',
    'description': 'Play with legos',
    'timestamp': datetime.now(),
    'location': '489y5',
    'ammenenties': ['accessable', 'before transportation'],
    'minAge': 5,
    'maxAge': 10,
    'category': 'sport',
    'cost': 150,
    'provider': 'unknown',
    'activityStartDate': '2019-01-26T13:18:15',
    'activityEndDate': '2019-01-26T13:18:15',
    'registrationStartDate': datetime.now()
}

res = es.index(index=indexName, doc_type=docType, id=1, body=doc)
print(res['result'])

res = es.get(index=indexName, doc_type=docType, id=1)
print(res['_source'])

es.indices.refresh(index=indexName)

res = es.search(index=indexName, body={"query": {"match_all": {}}})
print("Got %d Hits:" % res['hits']['total'])
for hit in res['hits']['hits']:
    print("%(timestamp)s %(activity)s: %(activityDate)s" % hit["_source"])