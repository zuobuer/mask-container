#mask-container
a mask container with background layer


#use
```
    npm install mask-container
```

```
    <MaskContainer
          show={true}
          bgStyle={{backgroundColor: "transparent"}}
          bgClick={()=>{console.log("click bg area")}}
    >   
     your Component
    </MaskContainer>
```

#properties
 * show: control the mask show or hide
 * bgStyle: control the mask style with jsx style syntax 
 * bgClick: callback for the mask background click or touch

