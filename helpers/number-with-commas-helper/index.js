const numberWithCommas = (x) => `Rp ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')},-`;

export default numberWithCommas;
