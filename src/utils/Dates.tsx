import { format } from 'date-fns'

const getMonthBr = (month: number): string => {
  let dateReturn = '';
  switch (month) {
    case 0:
      dateReturn = 'Janeiro';
      break;
    case 1:
      dateReturn = 'Fevereiro';
      break;
    case 2:
      dateReturn = 'Março';
      break;
    case 3:
      dateReturn = 'Abril';
      break;
    case 4:
      dateReturn = 'Maio';
      break;
    case 5:
      dateReturn = 'Junho';
      break;
    case 6:
      dateReturn = 'Julho';
      break;
    case 7:
      dateReturn = 'Agosto';
      break;
    case 8:
      dateReturn = 'Setembro';
      break;
    case 9:
      dateReturn = 'Outubro';
      break;
    case 10:
      dateReturn = 'Novembro';
      break;
    case 11:
      dateReturn = 'Dezembro';
      break;
  }
  return dateReturn;
}

const dateDDMMYYYYandHours = (date: any) => {
  const formatted = format(date, 'dd/MM/yyyy HH:mm:ss')
  return formatted
}

const maskDateMMYYYY = (date: any) => {
  date = date.replace(/\D/g, ''); // Remove tudo o que não é dígito
  date = date.replace(/^(\d{2})(\d)/, '$1/$2'); // Coloca ponto entre o segundo e o terceiro dígitos
  return date;
};

const maskDateDDMMYYYY = (date: any) => {
  date = date.replace(/\D/g, ''); // Remove tudo o que não é dígito
  date = date.replace(/^(\d{2})(\d)/, '$1/$2'); // Coloca barra entre o segundo e o terceiro dígitos
  return date;
};

export default {
  getMonthBr,
  maskDateMMYYYY,
  maskDateDDMMYYYY,
  dateDDMMYYYYandHours
};
