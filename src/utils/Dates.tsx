import { format } from 'date-fns'

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
  maskDateMMYYYY,
  maskDateDDMMYYYY,
  dateDDMMYYYYandHours
};
