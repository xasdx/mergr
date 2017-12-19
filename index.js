let mergeObjects = (objects, overwrite) => {
  let result = cloneObject(objects[0])
  for (let i = 1; i < objects.length; i += 1) {
    iterateOwnProperties(objects[i], (property, object) => {
      if (overwrite === false && result.hasOwnProperty(property)) {
        /* do nothing */
      } else {
        result[property] = object[property]
      }
    })
  }
  return result
}

let cloneObject = (object) => {
  let result = {}
  iterateOwnProperties(object, (property) => {
    result[property] = object[property]
  })
  return result
}

let iterateOwnProperties = (object, f) => {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      f(property, object)
    }
  }
}

module.exports = mergeObjects