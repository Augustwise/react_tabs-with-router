import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

import type { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId?: string | null;
};

export const Tabs = ({ tabs, activeTabId = null }: Props) => {
  const navigate = useNavigate();

  const activeTab = tabs.find(tab => tab.id === activeTabId) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === activeTabId })}
              onClick={() => navigate(`/tabs/${tab.id}`)}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content ?? 'Please select a tab'}
      </div>
    </div>
  );
};
