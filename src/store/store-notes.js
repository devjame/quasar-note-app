import { uid } from 'quasar'

const state = {
    preview: true,
    notes: [
        {
          id: 1,
          title: "Lorem ipsum doller - 1",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: '5-01-2021'
        },
        {
          id: 2,
          title: "Lorem ipsum doller - 2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: '5-01-2021'
        },
        {
          id: 3,
          title: "Lorem ipsum doller - 3",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: '5-01-2021'
        },
        {
          id: 4,
          title: "Lorem ipsum doller - 4",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: '5-01-2021'
        }
    ]
}

const mutations = {
  deleteNote(state, id) {
    let notes = state.notes.filter(v => v.id != id)
    state.notes = notes
  },
  addNote(state, note) {
    let notes = state.notes.concat(note)
    state.notes = notes
  },
  editNote(state, note) {
    state.notes.find(v => {
      if(v.id == note.id){
        Object.assign(v, note)
      }
    })
  },
  tooglePreview(state, payload) {
    state.preview = payload
  }
}

const actions = {
  deleteNote({commit}, id) {
    commit('deleteNote', id)
    
  },
  addNote({commit}, note) {
    let noteId = uid()
    let date = new Date()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()
    let createdAt = `${day}'-'${month}'-'${year}`
    let payload = {
      id: noteId,
      createdAt: createdAt,
      ...note
    }
    commit('addNote', payload)
  },
  editNote({commit}, note) {
    commit('editNote', note)
  },
  tooglePreview({ commit }, payload) {
    commit('tooglePreview', payload)
  }
}

const getters = {
    notes: (state) => {
        return state.notes
    },
    noteById: (state) => (id) => {
      return state.notes.find(v => v.id == id)
    },
    preview: (state) => {
      return state.preview
    }
}


export default {
    namespace: true,
    state,
    actions,
    mutations,
    getters
}