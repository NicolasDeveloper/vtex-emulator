
const pattern = /^(http|https):\/\/[\.a-z0-9]+\.com.br/;

module.exports.getDepartment = async (categories, department) => {

  return new Promise((resolve, reject) => {
    const _department = categories && categories.find((departmentCurrent) => {
      let _department = departmentCurrent.url.replace(pattern, "");
      let _categoires = _department.replace("/", "").split(/\//g);
      _department = _categoires[_categoires.length - 1];

      return _department && _department.toLowerCase() === department.toLowerCase();
    });

    if (_department) {
      resolve(_department);
    } else {
      reject();
    }
  });
}

const _getCategory = (category, categories, nivel) => {

  return new Promise(async (resolve, reject) => {
    const _category = category.children && category.children.find((category) => {

      let _category = category.url.replace(pattern, "");
      let _categoires = _category.replace("/", "").split(/\//g);
      _category = _categoires[_categoires.length - 1];

      return _category === categories[nivel].toLowerCase().trim();
    });

    if (_category) {

      categories[nivel] = _category;

      if (((nivel + 1) < categories.length && !_category.children) || (nivel + 1) < categories.length && _category.children.length === 0) {
        reject();
        return;
      }

      if ((nivel + 1) > (categories.length - 1)) {
        resolve();
        return;
      }

      try {
        await _getCategory(_category, categories, nivel + 1);
      } catch (error) {
        reject();
        return;
      }

      resolve();

    } else {

      reject();
    }

  });
}

module.exports.getCategory = (categories, departmentName, categoriesName) => {

  return new Promise(async (resolve, reject) => {

    try {
      const _department = categories && categories.find((departmentCurrent) => {
        let _department = departmentCurrent.url.replace(pattern, "");
        let _categoires = _department.replace("/", "").split(/\//g);
        _department = _categoires[_categoires.length - 1];

        return _department && _department.toLowerCase() === departmentName.toLowerCase();
      });

      if (_department) {
        let categoriesParsed = categoriesName.split(/\//g);
        await _getCategory(_department, categoriesParsed, 0);
        resolve([_department, ...categoriesParsed]);
      } else {
        reject();
      }
    } catch (error) {
      reject();
    }
  });
}