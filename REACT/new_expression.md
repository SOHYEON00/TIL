```
{nweets.map((nweet) => {
    return (
        <Nweet 
            key={nweet.id} 
            nweetObj={nweet} isOwner={nweet.**creatorId === userObj.uid**}/>
        );
    })
}
```

```
{isOwner && (
        <>
          <buton>Delete</buton>
          <button>Edit</button>
        </>
    )
}
```