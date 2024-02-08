import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('project', {
  state: () => ({
    projects: [],
    searchQuery: '', 
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
      this.fetchCharacters();
    },

    clearFilters() {
      this.searchQuery = '';
    },
  },
});