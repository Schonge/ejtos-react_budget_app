const CurrencyChange = (event, dispatch) => {
  
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
      })
}

export default CurrencyChange;