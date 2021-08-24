<template>
  <div class="q-pa-md">
      
    <q-table
      @row-dblclick="onRowDblClick"
      class="alternate-row-colours"
      title="Patients"
      :rows="rows"
      :columns="columns"
      :separator="separator"
      :selected-rows-label="getSelectedString"
      :data="rows"
      selection="single"
      v-model:selected="selected"
      row-key="patientID"
      dark
      table-header-class="bg-indigo-9"
      table-class="bg-indigo-14"
      card-class="bg-indigo-10"
    >
      <template v-slot:body-cell-operations="props">
        <q-td :props="props">
          <q-btn
          color="negative"
          icon-right="desktop_windows"
          no-caps
          flat
          dense
          @click="view(props)"
        />
        <q-btn
          color="negative"
          icon-right="edit"
          no-caps
          flat
          dense
          @click="edit(props)"
        />
        </q-td>
      </template>
    </q-table>
    <!-- Debugging purposes (shows which are selected)
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "patientID",
    required: true,
    label: "Patient ID",
    align: "left",
    field: (row) => row.patientID,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "patientName",
    align: "center",
    label: "Patient Name",
    field: "patientName",
    sortable: true,
  },
  {
    name: "studyDate",
    label: "Study Date",
    field: "studyDate",
    sortable: true,
  },
  { name: "studyDesc", label: "Study Description", field: "studyDesc" },
  {
    name: "modalities",
    label: "Modalities",
    field: "modalities",
    sortable: true,
  },
  {
    name: "imageCount",
    label: "No. of Images",
    field: "imageCount",
    sortable: true,
  },
  {
    name: "operations",
    label: "Operations",
    field: "operations",
  },
];

const rows = [
  {
    patientID: "PatientID Test",
    patientName: "Patient Name",
    studyDate: "20/08/21",
    studyDesc: "CT scan of head",
    modalities: "CT",
    imageCount: "54",
  },
  {
    patientID: "John",
    patientName: "Doe",
    studyDate: "21/08/21",
    studyDesc: "CT scan of chest",
    modalities: "CT",
    imageCount: "40",
  },
  {
    patientID: "Jake",
    patientName: "A",
    studyDate: "21/08/21",
    studyDesc: "CT scan of chest",
    modalities: "CT",
    imageCount: "40",
  },
  {
    patientID: "James",
    patientName: "Deer",
    studyDate: "21/08/21",
    studyDesc: "CT scan of chest",
    modalities: "CT",
    imageCount: "40",
  },
];

export default {
  name: "DataTable",
  setup() {
    const selected = ref([]);

    return {
      selected,
      separator: ref("cell"),
      columns,
      rows,

      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },
    };
  },
  methods: {
    onRowDblClick(e, row) {
      console.log('Double clicked: ' + row.patientID);
    },
    view(e){
        console.log('View: ' + e.row.patientID)
    },
    edit(e){
        console.log('Edit: ' + e.row.patientID)
    }
  },
};
</script>

<style>
.alternate-row-colours tr:nth-child(odd) {
  background: #304ffe;
}
.alternate-row-colours tr:nth-child(even) {
  background: #536dfe;
}

.bg-white {
  background: white;
}

.bg-grey {
  background: tomato;
}
</style>