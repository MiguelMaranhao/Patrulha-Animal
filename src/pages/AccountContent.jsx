import React, { useEffect } from 'react'
import SettingsMenuItem from '../components/SettingsMenuItem'

export default function AccountContent({ user, onLogout }) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [])

  return (
    <div className="pb-6">
      <div className="flex flex-col items-center p-6 bg-white">
        <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <i data-lucide="user" className="w-16 h-16 text-gray-400"></i>
        </div>
        <button className="text-sm text-cyan-600 hover:underline mb-2">Alterar foto</button>
        <p className="text-xl font-semibold text-gray-800">{user.name || 'Usuário'}</p>
        <p className="text-gray-500">{user.email}</p>
      </div>

      <div className="space-y-6 mt-4">
        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 mb-2">Gerir Conta</h2>
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden mx-4">
            <SettingsMenuItem icon="user" title="Editar Perfil" description="Mude seu nome, email ou foto" />
            <div className="border-t border-gray-100"></div>
            <SettingsMenuItem icon="lock" title="Mudar Senha" description="Atualize sua segurança" />
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 mb-2">Gerir Pets</h2>
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden mx-4">
            <SettingsMenuItem icon="trash-2" title="Remover Pet" description="Remova um pet da sua conta" />
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 mb-2">Aplicação</h2>
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden mx-4">
            <SettingsMenuItem icon="bell" title="Notificações" description="Gerir alertas e lembretes" />
            <div className="border-t border-gray-100"></div>
            <SettingsMenuItem icon="help-circle" title="Centro de Ajuda" description="Obtenha suporte" />
          </div>
        </div>

        <div className="mt-8 mx-4">
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <SettingsMenuItem icon="log-out" title="Sair da Conta" onClick={onLogout} isDestructive={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
