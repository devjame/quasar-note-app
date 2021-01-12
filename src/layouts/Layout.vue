<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          To-Note
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" :name="nav.icon" />
          </q-item-section>

          <q-item-section>{{ nav.label }}</q-item-section>
        </q-item>
        <q-btn rounded color="primary" class="absolute-center">
          <div>New Note</div>
          <q-icon right size="2em" name="map" />
        </q-btn>
      </q-list>
    </q-drawer>
    <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: true,
      navs: [
        {
          label: 'Note',
          icon: 'notes',
          to: '/'
        },
        {
          label: 'New Note',
          icon: 'note_add',
          to: '/create'
        }
      ]
    }
  }
}
</script>
