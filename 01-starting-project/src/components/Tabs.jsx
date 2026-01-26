export default function Tabs({children, buttons, buttonsContainer}){
    let ButtonsContainer = buttonsContainer
    return(
        <>
        <ButtonsContainer>
           {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}