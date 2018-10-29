
const pattern = /^(http|https):\/\/[\.a-z0-9]+\.com.br/;

module.exports.getDepartment = async (categories, department) => {

    return new Promise((resolve, reject) => {
      const _department = categories && categories.find((departmentCurrent) => {
        let _department = departmentCurrent.url.replace(pattern, "");
        let _categoires = _department.replace("/", "").split(/\//g);
        _department = _categoires[_categoires.length - 1];
        
        return _department && _department.toLowerCase() === department.toLowerCase(); 
      });

      if(_department) {
        resolve(_department);
      } else {
        reject();
      }
    });
  }