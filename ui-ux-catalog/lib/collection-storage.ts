// LocalStorage management for collection/cart functionality

const COLLECTION_KEY = 'uiCollection';

export interface CollectionItem {
  id: string;
  addedAt: number;
}

export const getCollection = (): CollectionItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(COLLECTION_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const addToCollection = (id: string): void => {
  if (typeof window === 'undefined') return;
  
  const collection = getCollection();
  
  // Check if already in collection
  if (!collection.some((item) => item.id === id)) {
    collection.push({
      id,
      addedAt: Date.now(),
    });
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
    
    // Dispatch custom event for UI updates
    window.dispatchEvent(new CustomEvent('collectionUpdate', { detail: collection }));
  }
};

export const removeFromCollection = (id: string): void => {
  if (typeof window === 'undefined') return;
  
  const collection = getCollection();
  const filtered = collection.filter((item) => item.id !== id);
  localStorage.setItem(COLLECTION_KEY, JSON.stringify(filtered));
  
  // Dispatch custom event for UI updates
  window.dispatchEvent(new CustomEvent('collectionUpdate', { detail: filtered }));
};

export const clearCollection = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(COLLECTION_KEY);
  
  // Dispatch custom event for UI updates
  window.dispatchEvent(new CustomEvent('collectionUpdate', { detail: [] }));
};

export const isInCollection = (id: string): boolean => {
  const collection = getCollection();
  return collection.some((item) => item.id === id);
};

export const getCollectionCount = (): number => {
  return getCollection().length;
};
