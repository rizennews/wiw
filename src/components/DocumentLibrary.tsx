"use client";

import React, { useState } from 'react';
import { Search, Folder, FileText, FileSpreadsheet, FileArchive, Download, ChevronRight, File, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Data
const FOLDERS = [
  { id: 'reports', name: 'Annual Reports', itemCount: 4, color: 'bg-blue-500' },
  { id: 'policies', name: 'Policy & Guidelines', itemCount: 12, color: 'bg-slate-700' },
  { id: 'events', name: 'Event Materials', itemCount: 8, color: 'bg-emerald-500' },
  { id: 'financial', name: 'Financials', itemCount: 3, color: 'bg-indigo-500' },
];

const FILES = [
  { id: 'f1', folderId: 'reports', name: 'Annual Impact Report 2023.pdf', date: 'Oct 24, 2023', size: '2.4 MB', icon: FileText, url: '/dummy.pdf' },
  { id: 'f2', folderId: 'reports', name: 'Annual Impact Report 2022.pdf', date: 'Jan 15, 2023', size: '2.1 MB', icon: FileText, url: '/dummy.pdf' },
  { id: 'f3', folderId: 'policies', name: 'Women in STEM Policy Brief.pdf', date: 'Aug 12, 2023', size: '1.1 MB', icon: FileText, url: '/dummy.pdf' },
  { id: 'f4', folderId: 'financial', name: 'Q3 Financial Summary.xlsx', date: 'Nov 02, 2023', size: '1.8 MB', icon: FileSpreadsheet, url: '/dummy.xlsx' },
  { id: 'f5', folderId: 'events', name: 'Workshop Assets.zip', date: 'Feb 20, 2024', size: '15.6 MB', icon: FileArchive, url: '/dummy.zip' },
  { id: 'f6', folderId: null, name: 'Strategic Plan 2024-2027.pdf', date: 'Dec 05, 2023', size: '4.2 MB', icon: FileText, url: '/dummy.pdf' },
  { id: 'f7', folderId: null, name: 'Brand Guidelines.pdf', date: 'Mar 10, 2024', size: '8.5 MB', icon: FileText, url: '/dummy.pdf' },
];

export function DocumentLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  // Derived state
  const folderData = currentFolder ? FOLDERS.find(f => f.id === currentFolder) : null;
  
  const displayFolders = currentFolder 
    ? [] 
    : FOLDERS.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
  const displayFiles = FILES.filter(f => {
    // If searching, ignore folders and search everything
    if (searchQuery) return f.name.toLowerCase().includes(searchQuery.toLowerCase());
    // Otherwise filter by current folder
    return f.folderId === currentFolder;
  });

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Top Bar: Search */}
      <div className="relative w-full max-w-2xl mb-4">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-100/80 border-transparent focus:bg-white focus:border-slate-300 focus:ring-0 outline-none transition-all duration-300 text-slate-700 text-sm font-medium"
        />
      </div>

      {/* Breadcrumbs */}
      {!searchQuery && (
        <div className="flex items-center text-lg md:text-xl font-medium text-slate-800 gap-2 mb-2">
          <button 
            onClick={() => setCurrentFolder(null)}
            className="hover:bg-slate-100 px-3 py-1 -ml-3 rounded-lg transition-colors"
          >
            All Documents
          </button>
          {folderData && (
            <>
              <ChevronRight className="w-5 h-5 text-slate-400" />
              <span className="px-3 py-1">{folderData.name}</span>
            </>
          )}
        </div>
      )}

      {/* Search Header */}
      {searchQuery && (
        <div className="text-lg font-medium text-slate-800 mb-2">
          Search results for "{searchQuery}"
        </div>
      )}

      {/* Folders Section */}
      {displayFolders.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-slate-500 mb-4">Folders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayFolders.map(folder => (
              <button
                key={folder.id}
                onClick={() => setCurrentFolder(folder.id)}
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                  <Folder className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-slate-700 text-sm">{folder.name}</span>
                  <span className="text-xs text-slate-400">{folder.itemCount} items</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Files Section */}
      {displayFiles.length > 0 ? (
        <div>
          <h3 className="text-sm font-medium text-slate-500 mb-4">Files</h3>
          
          <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_120px_100px_48px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <div>Name</div>
              <div className="hidden sm:block">Last Modified</div>
              <div className="hidden sm:block">Size</div>
              <div></div>
            </div>

            {/* File Rows */}
            <div className="divide-y divide-slate-100">
              {displayFiles.map(file => {
                const IconComponent = file.icon || File;
                return (
                  <div key={file.id} className="grid grid-cols-[1fr_48px] sm:grid-cols-[1fr_120px_100px_48px] gap-4 px-6 py-3 items-center hover:bg-slate-50/80 transition-colors group">
                    
                    {/* Name & Icon */}
                    <div className="flex items-center gap-3 overflow-hidden">
                      <IconComponent className="w-5 h-5 text-slate-400 shrink-0" />
                      <a href={file.url} download className="font-medium text-slate-700 text-sm truncate hover:text-primary transition-colors">
                        {file.name}
                      </a>
                    </div>

                    {/* Meta (hidden on mobile) */}
                    <div className="hidden sm:block text-sm text-slate-500">{file.date}</div>
                    <div className="hidden sm:block text-sm text-slate-500">{file.size}</div>

                    {/* Actions */}
                    <div className="flex justify-end relative">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition-colors opacity-0 group-hover:opacity-100 outline-none">
                          <MoreVertical className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40 rounded-xl">
                          <DropdownMenuItem className="cursor-pointer p-0">
                            <a href={file.url} download className="flex items-center w-full px-2 py-1.5 text-sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          {searchQuery ? (
            <>
              <Search className="w-16 h-16 text-slate-200 mb-4" />
              <h3 className="text-lg font-medium text-slate-700 mb-1">No documents found</h3>
              <p className="text-slate-500 text-sm">We couldn't find any documents matching "{searchQuery}".</p>
            </>
          ) : (
            <>
              <Folder className="w-16 h-16 text-slate-200 mb-4" />
              <h3 className="text-lg font-medium text-slate-700 mb-1">This folder is empty</h3>
              <p className="text-slate-500 text-sm">There are no documents in this folder yet.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
