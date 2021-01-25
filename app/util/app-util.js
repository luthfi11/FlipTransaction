/* eslint-disable prettier/prettier */
/* eslint-disable radix */

class AppUtil {

  static transformText(text) {
    if (text.length <= 4) {
      return text.toUpperCase();
    } else {
      return text[0].toUpperCase() + text.slice(1);
    }
  }

  static formatCurrency(amount) {
    return `Rp${amount
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }

  static formatDate(created_at) {
    const localMonth = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const date = created_at.slice(0, 10);
    const splitted = date.split('-');

    return `${splitted[2]} ${localMonth[parseInt(splitted[1]) - 1]} ${
      splitted[0]
    }`;
  }

  static setBorderColor(status) {
    return {borderLeftColor: status === 'SUCCESS' ? '#0F9D58' : '#EF6C00'};
  }

  static localizedStatus(status) {
    return status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';
  }

  static setStatusColor(status) {
    if (status === 'SUCCESS') {
      return {
        backgroundColor: '#0F9D58',
        color: '#FFFFFF',
      };
    } else {
      return {
        backgroundColor: '#FFFFFF',
        borderColor: '#EF6C00',
        borderWidth: 2,
        color: '#000000',
      };
    }
  }
}

export default AppUtil;
