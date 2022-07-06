export const RULES = {
  name: [
    { required: true, message: '请输入活动名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为 3-5 个字符', trigger: 'blur' }
  ],
  region: [{ required: true, message: '请选择活动地区', trigger: 'change' }],
  count: [ { required: true, message: '请选择活动次数', trigger: 'change' }],
  type: [{ type: 'array', required: true, message: '请至少选择一种活动类型', trigger: 'change'},],
  resource: [{ required: true, message: '请选择活动来源', trigger: 'change'}],
  desc: [{ required: true, message: '请输入活动描述', trigger: 'blur' }],
  itemName: [{ required: true, message: '请输入配置名称', trigger: 'blur' }],
  itemValue: [{ required: true, message: '请输入配置值', trigger: 'blur' }]
}

export const ACTIVITY_TYPE = {
  ONLINE: 1, 
  PROMOTION: 2,
  OFFLINE: 3,
  SIMPLE: 4,
}

export const ACTIVITY_TYPE_LIST = [
  {
    value: ACTIVITY_TYPE.ONLINE,
    label: '线上活动',
    key: ACTIVITY_TYPE.ONLINE,
  },
  {
    value: ACTIVITY_TYPE.PROMOTION,
    label: '促销活动',
    key: ACTIVITY_TYPE.PROMOTION,
  },
  {
    value: ACTIVITY_TYPE.OFFLINE,
    label: '线下活动',
    key: ACTIVITY_TYPE.OFFLINE,
  },
  {
    value: ACTIVITY_TYPE.SIMPLE,
    label: '简单活动',
    key: ACTIVITY_TYPE.SIMPLE,
  },
];

export const REGION_LIST = [
  { value: 'beijing', label: '北京', key: 'beijing' },
  { value: 'shanghai', label: '上海', key: 'shanghai' },
  { value: 'guangzhou', label: '广州', key: 'guangzhou' },
  { value: 'shenzhen', label: '深圳', key: 'shenzhen' }
];


