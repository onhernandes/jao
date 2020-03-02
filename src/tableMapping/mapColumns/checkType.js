const validDataTypes = [
  'string',
  'integer',
  'bigInteger',
  'text',
  'string',
  'float',
  'decimal',
  'boolean',
  'date',
  'datetime',
  'time',
  'timestamp',
  'binary',
  'enum',
  'json'
]

module.exports = column => validDataTypes.indexOf(column.type) !== -1
