const useMoneyFormater = (money) => {

  const format = (cash) => {
    cash = parseFloat(cash).toFixed(2);

    const decimalStr = cash.toString().split('.')[1];
    const integerStr = cash.toString().split('.')[0];

    return `${parseFloat(integerStr).toLocaleString()}.${decimalStr}`
  }

  return format(money)
}

export default useMoneyFormater
