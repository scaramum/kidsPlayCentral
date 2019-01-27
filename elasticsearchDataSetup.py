import json
from datetime import datetime
from elasticsearch import Elasticsearch
es = Elasticsearch()
indexName= "kids-central-activities"
docType='activity'

def loadData(sourceDoc, docType, expectedDocs):
    with open(sourceDoc) as f:
        data = json.load(f)
    id = 0
    for d in data:
        # print(d)
        res = es.index(index=docType, doc_type=docType, id=id, body=d)
        print(res['result'])
        id=id+1
    es.indices.refresh(index=docType)
    
    res = es.search(index=docType, body={"query": {"match_all": {}}})
    print("Got %d Hits. Expected %d" % (res['hits']['total'], expectedDocs))

# for hit in res['hits']['hits']:
#     print("%(activityStartDate)s %(activity)s: %(location)s" % hit["_source"])

loadData('CampsData.json', 'camp',7)
loadData('DayCareData.json', 'daycare', 3)
loadData('activityData.json', 'activity', 3)
