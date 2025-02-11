import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'users/:userId',
    renderMode: RenderMode.Server,
  },
  {
    path: 'users/:userId/tasks',
    renderMode: RenderMode.Server,
  },
  {
    path: 'users/:userId/tasks/new',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
