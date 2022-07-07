<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
    :size="formSize"
  >
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="活动地区" prop="region">
      <el-select-v2 v-model="ruleForm.region" placeholder="活动地区" :options="REGION_LIST" />
    </el-form-item>
    <el-form-item label="活动次数" prop="count">
      <el-select-v2 v-model="ruleForm.count" placeholder="活动次数" :options="options" />
    </el-form-item>
    <el-form-item label="立即配送" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="活动类型" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox v-for="item in ACTIVITY_TYPE_LIST" :label="item.label" :value="item.value" name="type"/>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="活动来源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动描述" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="活动配置">
      <div class="table-wrap">
        <el-button @click="handleAdd">添加配置</el-button>
        <el-table :data="ruleForm.config">
          <el-table-column label="配置名称">
            <template #default="scope" class="table-column-wrap">
            <div style="padding: 20px 0">
              <el-form-item :prop="`config.${scope.$index}.itemName`" :rules="rules.itemName">
                <el-input v-model="scope.row.itemName" />
              </el-form-item>
            </div>
            </template>
          </el-table-column>
          <el-table-column label="配置值">
            <template #default="scope">
            <div style="padding: 20px 0">
              <el-form-item :prop="`config.${scope.$index}.itemValue`" :rules="rules.itemValue">
                <el-input v-model="scope.row.itemValue" />
              </el-form-item>
            </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="text" @click="handleDelete(scope.$index)">删除</el-button>
              <el-button type="text" @click="handleDelete(scope.$index)">上移</el-button>
              <el-button type="text" @click="handleDelete(scope.$index)">下移</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { RULES, ACTIVITY_TYPE_LIST, REGION_LIST } from './utils/const'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  config: [{
    itemName: '',
    itemValue: ''
  }]
})

const rules = reactive<FormRules>(RULES)

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    console.log('valid', valid)
    console.log('fields', fields)
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 100 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

const handleAdd = () => {
  ruleForm.config.push({
    itemName: '',
    itemValue: ''
  })
}

const handleDelete = (index: number) => {
  ruleForm.config.splice(index, 1)
}

</script>
<style >
.table-wrap {
  width: 100%;
  text-align: right;
}

</style>
